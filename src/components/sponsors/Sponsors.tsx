"use client";
import Image from "next/image";
import riverGuide from "@/assets/riverguide.png";
import Logo2 from "@/assets/logo.png";
import wrf from "@/assets/logo_wrf_white.png";
import konjic from "@/assets/logo-komplet-removebg-preview – kopija.png";
import gardenLogo from "@/assets/gardenLogo.png";
import kajakLogo from "@/assets/kajakLogo.png";

import React, { useEffect, useRef } from "react";

import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import Link from "next/link";

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
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
    <section id="sponzori" className="w-full py-10 md:py-24">
      <motion.div
        animate={controls}
        ref={ref}
        className="flex flex-col gap-y-14"
      >
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-y-10 w-full p-10">
          <Link href="/">
            <Image className="w-[10rem] h-[10rem]" src={Logo2} alt="raft" />
          </Link>
          <Link target="_blank" href="https://nova.gardencity.ba/">
            <Image
              className="w-[12rem] h-[12rem]"
              src={gardenLogo}
              alt="raft"
            />
          </Link>
          <Link target="_blank" href="https://worldraftingfederation.com/">
            <Image className="w-[10rem] h-[5rem]" src={wrf} alt="raft" />
          </Link>
          <Link target="_blank" href="https://welcometokonjic.ba/">
            <Image className="w-[8rem] h-[10rem]" src={konjic} alt="raft" />
          </Link>
          <Link target="_blank" href="https://welcometokonjic.ba/">
            <Image className="w-[13rem] h-[10rem]" src={kajakLogo} alt="raft" />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100068525484988"
            className="pointer-events-none"
          >
            <Image
              className="w-[10rem] h-[10rem]"
              src={riverGuide}
              alt="raft"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Sponsors;
