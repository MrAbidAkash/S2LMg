"use client";

import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
  currentUser,
  useAuth,
  useUser,
} from "@clerk/nextjs";

import ThemeUi from "@/components/ThemeUi";
import { ModeToggle } from "@/components/mode.toggle";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { User } from "@clerk/nextjs/server";

const Heading = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const { user } = useUser();

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
              className="btn p-1 pt-1 btn-ghost"
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
            <Link href="/">
              <Image
                alt="stort2listen"
                src="/s2l.png"
                width={140}
                height={40}
                className=" "
              />
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center gap-3">
            <ThemeUi />
            <SignedIn>
              <UserButton />
              <div className="max-sm:hidden">
                <h2 className="font-bold">Welcome,</h2>{" "}
                <h2 className="text-sm font-semibold opacity-80">
                  {user?.firstName}
                </h2>{" "}
              </div>
            </SignedIn>

            {}

            <SignedOut>
              <div className="flex-none hidden md:flex  flex-row items-center justify-center gap-3 h-4 200">
                <Link href="/sign-up" className="">
                  <h3>Sign Up</h3>
                </Link>
                <Separator orientation="vertical" />
                <Link href="/sign-in">
                  <h3>Sign in</h3>
                </Link>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="menu pt-9 p-3 w-80 min-h-full bg-base-200">
          <li>
            {" "}
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
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
          </li>
          <ul>
            {/* Sidebar content here */}
            <li>
              <a>Side</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Heading;
