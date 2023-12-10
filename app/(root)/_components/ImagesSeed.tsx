"use client";

import Image from "next/image";

export function ImagesSeed(props: any) {
  return (
    <div className=" cursor-pointer rounded-2xl overflow-hidden ">
      <Image
        src={`/${props.imgSrc}`}
        alt="card-image"
        className="h-full w-full object-cover"
        width={500}
        height={500}
      />
    </div>
  );
}
