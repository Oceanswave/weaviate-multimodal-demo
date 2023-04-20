import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weaviate Demo",
  description: "Demonstrates the capabilities of Weaviate",
  viewport: "width=device-width, initial-scale=1",
  icons: ["favicon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="h-full">{children}</body>
    </html>
  );
}
