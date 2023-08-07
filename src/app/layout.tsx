import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Queryprovider } from "@/providers/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book App",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Queryprovider>
      <html
        lang="en"
        className={cn("bg-white text-slate-900 antialiased", inter.className)}
      >
        <body className="min-h-screen pt-12 bg-slate-50 antialiased">
          <Navbar />
          <div className="max-w-7xl mx-auto h-full p-12">{children}</div>
        </body>
      </html>
    </Queryprovider>
  );
}
