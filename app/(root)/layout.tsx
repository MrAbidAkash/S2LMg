"use client";

import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Menu from "./_components/Menu";
import { cn } from "@/lib/utils";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bgdarkish  w-full md:max-w-[1140px] mx-auto ">
      {children}
    </div>
  );
};

export default Rootlayout;
