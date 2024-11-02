import type { Metadata } from "next";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "Blog Post`",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
