#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function createPackage() {
  const packageName = await askQuestion("패키지 이름을 입력하세요: ");
  const packageDescription = await askQuestion("패키지 설명을 입력하세요: ");

  const packageDir = path.join(__dirname, "../packages", packageName);

  // 디렉토리 생성
  fs.mkdirSync(packageDir, { recursive: true });

  // package.json 생성
  const packageJson = {
    name: `@uixlab/${packageName}`,
    version: "0.0.1",
    description: packageDescription,
    main: "./dist/index.js",
    module: "./dist/index.mjs",
    types: "./dist/index.d.ts",
    scripts: {
      build: "tsup src/index.tsx --format cjs,esm --dts --external react",
      dev: "tsup src/index.tsx --format cjs,esm --dts --external react --watch",
      lint: "eslint src/*.ts*",
      clean: "rm -rf .turbo && rm -rf node_modules && rm -rf dist",
    },
    peerDependencies: {
      react: "^18.0.0",
    },
    devDependencies: {
      "@types/react": "^18.0.0",
      eslint: "^8.0.0",
      react: "^18.0.0",
      tsup: "^8.0.0",
      typescript: "^5.0.0",
    },
  };

  fs.writeFileSync(
    path.join(packageDir, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );

  // tsconfig.json 생성
  const tsConfig = {
    extends: "@uixlab/typescript-config/react-library.json",
    include: ["."],
    exclude: ["dist", "build", "node_modules"],
  };

  fs.writeFileSync(
    path.join(packageDir, "tsconfig.json"),
    JSON.stringify(tsConfig, null, 2)
  );

  // 기본 컴포넌트 생성
  const srcDir = path.join(packageDir, "src");
  fs.mkdirSync(srcDir);

  const indexContent = `export * from './${packageName}';\n`;
  fs.writeFileSync(path.join(srcDir, "index.tsx"), indexContent);

  const componentContent = `import React from 'react';

export interface ${packageName}Props {
  children?: React.ReactNode;
}

export const ${packageName} = ({ children }: ${packageName}Props) => {
  return <div>{children}</div>;
};
`;

  fs.writeFileSync(path.join(srcDir, `${packageName}.tsx`), componentContent);

  console.log(`패키지 ${packageName}가 성공적으로 생성되었습니다!`);
  rl.close();
}

createPackage().catch(console.error);
