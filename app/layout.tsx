import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import HeaderSection from "@/components/header";
import NavigationSection from "@/components/navigation";
import NavigationBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/toaster";
import ProductActionBar from "@/components/product/product-action-bar";
import ProductBar from "@/components/product/product-bar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinkwo ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(quicksand.className, "w-full max-w-screen-2xl")}>
        <Toaster />
        <main>
          <HeaderSection />
          {children}
          <ProductBar />
          <NavigationBar />
        </main>
      </body>
    </html>
  );
}
