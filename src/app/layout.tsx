import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FutureResume",
  description: "My resume builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <StoreProvider>
          <Navbar />
          <section className="pt-28">{children}</section>
        </StoreProvider>
      </body>
    </html>
  );
}
