import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex  justify-center py-12 text-sm md:text-xl  px-6 md:max-w-[1140px] mx-auto mt-32  max-sm:flex-col-reverse max-sm:gap-20 gap-5 ">
      <p className="flex-grow sm:w-[30%]">© Copyright 2023 Story2Listen Inc.</p>
      <ul className="sm:w-[65%] flex flex-wrap  h-4  items-center gap-x-4 gap-y-2 justify-center ">
        <li>
          <Link className="hover:" href="/about">
            About Us
          </Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:" href="/contact">
            Contact Us
          </Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:" href="/careers">
            Careers
          </Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:" href="/conditions">
            Conditions of Use
          </Link>
        </li>
        <Separator orientation="vertical" />
        <li>
          <Link className="hover:" href="/privacy">
            Privacy Notice
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
