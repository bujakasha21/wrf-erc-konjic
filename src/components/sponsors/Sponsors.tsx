"use client";
import Image from "next/image";
import riverGuide from "@/assets/riverguide.png";
import Logo2 from "@/assets/logo.png";
import wrf from "@/assets/logo_wrf_white.png";
import konjic from "@/assets/logo-komplet-removebg-preview – kopija.png";
import gardenLogo from "@/assets/gardenLogo.png";
import kajakLogo from "@/assets/kajakLogo.png";
import gradKonjicLogo from "@/assets/gradKonjic.png";
import igmanLogo from "@/assets/igmanLogo.webp";

import React, { useEffect, useRef } from "react";

import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import Link from "next/link";
import ReactPlayer from "react-player";

const Sponsors = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref);
  const isVideoInView = useInView(videoRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: "ease", duration: 0.5 },
      });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [isInView, controls]);

  return (
    <>
      <section id="sponzori" className="w-full py-10 md:py-24">
        <motion.div
          animate={controls}
          ref={ref}
          className="flex flex-col gap-y-14"
        >
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-y-10 w-full p-10">
            <Link href="/">
              <Image
                className="w-[10rem] h-[10rem]"
                src={Logo2}
                alt="Rafting Europsko Seniorsko Prvenstvno Konjic 2024"
              />
            </Link>
            <Link target="_blank" href="https://nova.gardencity.ba/">
              <Image
                className="w-[12rem] h-[12rem]"
                src={gardenLogo}
                alt="Rafting Europsko Seniorsko Prvenstvno Konjic 2024"
              />
            </Link>
            <Link target="_blank" href="https://www.konjic.ba">
              <Image
                className="w-[10rem] h-[7rem]"
                src={gradKonjicLogo}
                alt="Rafting Europsko Seniorsko Prvenstvno Konjic 2024"
              />
            </Link>
            <Link target="_blank" href="https://worldraftingfederation.com/">
              <Image
                className="w-[10rem] h-[5rem]"
                src={wrf}
                alt="Rafting Europsko Seniorsko Prvenstvno Konjic 2024"
              />
            </Link>
            <Link target="_blank" href="https://welcometokonjic.ba/">
              <Image
                className="w-[8rem] h-[10rem]"
                src={konjic}
                alt="Rafting Europsko Seniorsko Prvenstvno Konjic 2024"
              />
            </Link>
            <Link target="_blank" href="https://welcometokonjic.ba/">
              <Image
                className="w-[12rem] h-[10rem]"
                src={igmanLogo}
                alt="Rafting Europsko Seniorsko Prvenstvno Konjic 2024"
              />
            </Link>
            <Link target="_blank" href="https://welcometokonjic.ba/">
              <Image
                className="w-[13rem] h-[10rem]"
                src={kajakLogo}
                alt="Rafting Europsko Seniorsko Prvenstvno Konjic 2024"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100068525484988"
              className="pointer-events-none"
            >
              <Image
                className="w-[10rem] h-[10rem]"
                src={riverGuide}
                alt="Rafting Europsko Seniorsko Prvenstvno Konjic 2024"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      <div className="relative">
        <div className="bg-[#f2f2f2] absolute top-0 h-[2rem] sm:h-[3rem] md:h-[4rem] lg:h-[10rem] w-full z-10"></div>
        <div className="bg-[#f2f2f2] absolute bottom-0 h-[2rem] sm:h-[3rem] md:h-[4rem] lg:h-[10rem] w-full z-10"></div>
        <div className="player-wrapper pointer-events-none " ref={videoRef}>
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=jcJMp9AWrXc"
            muted
            playing={isVideoInView}
            loop
            playsinline
            controls={false}
            className="react-player"
          />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
