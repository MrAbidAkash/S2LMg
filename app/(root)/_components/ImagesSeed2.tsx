"use client";

import Image from "next/image";

export function ImagesSeed2(props: any) {
  return (
    <div className=" cursor-pointer rounded-2xl overflow-hidden ">
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
