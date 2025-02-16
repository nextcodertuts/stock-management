import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice Generator",
  description: "Generate invoices and estimates easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background relative">
          {children}
          <Toaster />
          <div className="absolute bottom-2 right-6">
            <small>
              Made with ❤️ By{" "}
              <Link href="https://www.nextcoder.co.in">nextCoder</Link>
            </small>
          </div>
        </div>
      </body>
    </html>
  );
}
