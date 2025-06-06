import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">UIX Lab Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ExampleCard
          title="기본 컴포넌트"
          description="기본적인 UI 컴포넌트 예제들"
          href="/examples/basic"
        />
        <ExampleCard
          title="레이아웃"
          description="다양한 레이아웃 구성 예제"
          href="/examples/layout"
        />
        <ExampleCard
          title="인터랙션"
          description="사용자 인터랙션 예제"
          href="/examples/interaction"
        />
      </div>
    </main>
  );
}

function ExampleCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
