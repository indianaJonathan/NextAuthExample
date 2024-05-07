import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextAuth example",
  description: "NextAuth example using Google and Microsoft authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased flex flex-col w-full min-h-screen`}>
        <Navbar />
        <div className="flex-1 flex flex-col p-8">
          { children }
        </div>
      </body>
    </html>
  );
}
