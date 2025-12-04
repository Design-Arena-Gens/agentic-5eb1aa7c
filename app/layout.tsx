import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phase 7 Contingency Planning",
  description:
    "Contingency planning playbook for AI-generated imagery pipelines, grounded in pragmatic principles and hybrid workflows."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-night-900 text-slate-200 antialiased">{children}</body>
    </html>
  );
}
