import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { sharedMetadata } from "@/data/sharedMetadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  ...sharedMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
