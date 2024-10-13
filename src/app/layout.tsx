import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { cn } from "@/lib/utils";
import QueryProvider from "@/providers/query-client.provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next js template by sujeet",
  description: "Next js template",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-dvh antialiased")}>
        <QueryProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </body>
    </html>
  );
}
