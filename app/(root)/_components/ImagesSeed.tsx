"use client";

import Image from "next/image";

export function ImagesSeed(props: any) {
  return (
    <div className="snap-start  h-[320px] w-[260px]  cursor-pointer rounded-2xl overflow-hidden ">
      <Image
        src={`/${props.imgSrc}`}
        alt="card-image"
        className="h-full w-full object-cover"
        width={1000}
        height={1000}
      />
    </div>
  );
}
