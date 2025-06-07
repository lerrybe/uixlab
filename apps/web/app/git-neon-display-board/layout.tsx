import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git Neon Display Board",
  description: "Git Neon Display Board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
