import Link from "next/link";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-gray-200 p-4">
        <nav className="space-y-2">
          <Link
            href="/examples/basic"
            className="block px-4 py-2 rounded hover:bg-gray-100"
          >
            기본 컴포넌트
          </Link>
          <Link
            href="/examples/layout"
            className="block px-4 py-2 rounded hover:bg-gray-100"
          >
            레이아웃
          </Link>
          <Link
            href="/examples/interaction"
            className="block px-4 py-2 rounded hover:bg-gray-100"
          >
            인터랙션
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
