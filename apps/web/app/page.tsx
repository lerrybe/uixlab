import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href={"/git-neon-display-board"}
          className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-2">이동하기</h2>
        </Link>
      </div>
    </main>
  );
}
