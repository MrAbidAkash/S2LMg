"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ImagesSeed2 } from "./ImagesSeed2";
import Link from "next/link";

const imgForDemos: string[] = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
];

const SwiperUi2 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        rewind={true}
        /*   autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} */
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwipe  m-5 "
      >
        {imgForDemos.map((img: string) => {
          return (
            <div key={img.length}>
              <SwiperSlide className="">
                <Link href={`/pod/${img}`} className="space-y-2 font-semibold">
                  <ImagesSeed2 imgSrc={img} />
                  <h2 className="text-lg ">Oath and Honor</h2>
                </Link>
                <div className="opacity-80">
                  <span className="text-base">By:</span>

                  <span>
                    <Link href={`/author/${img}`}>Liz Cheney</Link>
                  </span>
                </div>
              </SwiperSlide>
            </div>
          );
        })}

        {/*   
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default SwiperUi2;
