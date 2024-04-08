"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import tito from "@/assets/3321.jpg";
import Image from "next/image";

function Gallery() {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    overflow: "hidden",
    rtl: true,
    dots: true,
  };
  return (
    <div className="w-full h-screen bg-green-200 flex flex-col relative ">
      <div className="slider-container overflow-hidden">
        <Slider {...settings}>
          <div className="h-[50vh] w-[90vw] flex items-center justify-center text-8xl border ">
            <Image src={tito} className="w-full h-full" alt="tito" />
          </div>
          <div className="h-[50vh] w-[90vw] flex items-center justify-center text-8xl border ">
            <Image src={tito} className="w-full h-full" alt="tito" />
          </div>
          <div className="h-[50vh] w-[90vw] flex items-center justify-center text-8xl border ">
            <Image src={tito} className="w-full h-full" alt="tito" />
          </div>
        </Slider>
      </div>

      <div className="absolute bg-black left-[10%] w-[40vw] h-[50vh]"></div>
    </div>
  );
}
export default Gallery;
