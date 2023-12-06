"use client";

import ThemeUi from "@/components/ThemeUi";
import { ModeToggle } from "@/components/mode.toggle";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";




const Heading = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/*  <div className=" flex flex-row items-center justify-between gap-3 py-4 px-6 mx-auto md:max-max-w-[1140px]  ">
          <Link href={"/"}>
            <Image alt="stort2listen" src="/s2l.png" width={150} height={40} />
          </Link>
          <div className="flex flex-row items-center justify-center gap-3 h-4 200">
    

            <ThemeUi />

            <Link href="/signup" className="">
              <h3>Sign Up</h3>
            </Link>
            <Separator orientation="vertical" />
            <Link href="/login">
              <h3>Sign in</h3>
            </Link>
          </div>
        </div> */}
        <div className="flex flex-row items-center justify-between gap-3 py-4 px-6 mx-auto md:max-w-[1140px] ">
          <div className="flex-none md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className=" ">
            <Link href={"/"}>
              <Image
                alt="stort2listen"
                src="/s2l.png"
                width={140}
                height={40}
                className=" text-red-700"
              />
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center gap-3">
            <ThemeUi />
            <div className="flex-none hidden md:flex  flex-row items-center justify-center gap-3 h-4 200">
              <Link href="/signup" className="">
                <h3>Sign Up</h3>
              </Link>
              <Separator orientation="vertical" />
              <Link href="/login">
                <h3>Sign in</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
