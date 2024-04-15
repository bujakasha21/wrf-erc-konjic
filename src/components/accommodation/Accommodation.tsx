"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";
import Magnetic from "../utils/Magnetic";
import MotionButton from "../utils/MotionButton";
import whiteGardenLogo from "@/assets/gardenCityLogoWhite.png";
import Image from "next/image";

export default function Accommodation() {
  return (
    <div className="w-full h-[100vh] bg-black/40 z-10 relative overflow-hidden">
      <div className="z-10 bg-titleCol  opacity-80 absolute inest-0 w-full h-full  px-4 py-4  xl:px-28 xl:py-24 flex items-center justify-center">
        <div className="">
          <h2 className="text-8xl uppercase text-white font-bold w-full z-[30] cursor-pointer">
            Osigurajte smještaj
          </h2>
          <p className="font-thin text-lg text-white w-[100%] my-8">
            Budite korak ispred! Rezervišite svoj boravak u Garden City Hotelu
            Konjic i osigurajte savršen odmor tokom WRF prvenstva.
          </p>
        </div>
        <div className="w-full h-full opacity-70">
          <Image
            className="w-[30rem] h-[30rem]"
            src={whiteGardenLogo}
            alt="raft"
          />
        </div>
        <Magnetic>
          <MotionButton name="REZERVISI" onClick={() => console.log("first")} />
        </Magnetic>
      </div>

      {/* <div className="z-[20] bg-gradient-to-r from-black to-transparent opacity-80 absolute left-0 w-[90%] h-full blur-xl"></div> */}
      {/* <div className="z-[20] bg-gradient-to-l from-black to-transparent opacity-80 absolute right-0 w-[90%] h-full blur-xl"></div> */}
      <div className="player-wrapper pointer-events-none">
        <ReactPlayer
          width="100%"
          height="100%"
          url='https://www.youtube.com/embed/85ITTM97__A?si=3Cvke_olYqOEZkm3&amp;start=11"'
          muted
          playing
          loop
          playsinline
          controls={false}
          className="react-player"
        />
      </div>
    </div>
  );
}
