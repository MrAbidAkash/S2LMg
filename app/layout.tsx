import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Footer from "../components/Footer";
import Menu from "./(root)/_components/Menu";
import Heading from "../components/Heading";
import Offer from "./(root)/_components/Offer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "stort2listen",
  description: "An audio podcast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body data-theme="" className={` ${inter.className} `}>
        <div className="fixed top-0  w-full z-50 bg-inherit bg- bg-opacity-5 shadow-md animate-fadeDown">
          {/*   <Offer/> */}
          <Heading />
        </div>

        <div className="space-y-5 p-6 flex flex-col mt-28  md:max-w-[1140px] mx-auto animate-fadeDown ">
          <Menu />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
