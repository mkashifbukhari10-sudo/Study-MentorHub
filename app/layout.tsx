import type { Metadata } from "next";
import "./globals.css";
import { LayoutShell } from "./LayoutShell";

export const metadata: Metadata = {
  title: "Study Mentor",
  description:
    "Study tips, productivity strategies, and learning resources for students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
