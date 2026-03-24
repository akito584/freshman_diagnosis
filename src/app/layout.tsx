import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "あなたの中の起業家タイプ診断",
  description: "起業家って、特別な人じゃない。あなたの中の起業家タイプを診断します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full bg-gray-50">{children}</body>
    </html>
  );
}
