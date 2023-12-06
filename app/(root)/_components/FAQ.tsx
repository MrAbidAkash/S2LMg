"use client";

import React from "react";

import { ChevronDown, PlayIcon } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { AccordionHeader } from "@radix-ui/react-accordion";

function Icon({ id, open }: any) {
  return (
    <ChevronDown
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform `}
    />
    /*     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg> */
  );
}

export function FAQ() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col space-y-10">
      <h2 className="text-4xl font-bold ">Frequently asked questions</h2>
      <div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium flex items-center gap-x-2">
            <PlayIcon size={16} />
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p className="   opacity-80">
              constantly growing. We&apos;re constantly making mistakes.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re We&apos;re not always in the position that we
              want to be at. We&apos;re constantly growing. We&apos;re
              constantly making mistakes. We&apos;re constantly trying to
              express ourselves and actualize our dreams. We&apos;re not always
              in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re
              constantly trying to express ourselves and actualize our dreams.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium flex items-center gap-x-2">
            <PlayIcon size={16} />
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p className=" opacity-80">
              constantly growing. We&apos;re constantly making mistakes.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re We&apos;re not always in the position that we
              want to be at. We&apos;re constantly growing. We&apos;re
              constantly making mistakes. We&apos;re constantly trying to
              express ourselves and actualize our dreams. We&apos;re not always
              in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re
              constantly trying to express ourselves and actualize our dreams.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium flex items-center gap-x-2">
            <PlayIcon size={16} />
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p className=" opacity-80">
              constantly growing. We&apos;re constantly making mistakes.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re We&apos;re not always in the position that we
              want to be at. We&apos;re constantly growing. We&apos;re
              constantly making mistakes. We&apos;re constantly trying to
              express ourselves and actualize our dreams. We&apos;re not always
              in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re
              constantly trying to express ourselves and actualize our dreams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
