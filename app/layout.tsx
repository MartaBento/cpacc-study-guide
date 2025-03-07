import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import type { ReactNode } from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "📚 CPACC Study Guide",
    template: "%s | CPACC Study Guide",
  },
  description:
    "Prepare for the Certified Professional in Accessibility Core Competencies (CPACC) exam with structured materials, key concepts, and practice questions.",
  authors: [{ name: "Marta Bento", url: "https://github.com/MartaBento" }],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={openSans.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
