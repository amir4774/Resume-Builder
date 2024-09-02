import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
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
    <html
      lang="en"
      className="scrollbar-w-10 scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm  hover:scrollbar-thumb-orange-400 active:scrollbar-thumb-orange-500 scrollbar-thin"
    >
      <body className={quicksand.className}>
        <StoreProvider>
          <Navbar />
          <section className="pt-28">{children}</section>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
