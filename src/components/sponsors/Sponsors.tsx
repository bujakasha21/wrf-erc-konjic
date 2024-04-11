"use client";
import Image from "next/image";
import riverGuide from "@/assets/riverguide.png";
import Logo2 from "@/assets/logo2.png";
import wrf from "@/assets/logo_wrf_white.png";
import konjic from "@/assets/logo-komplet-removebg-preview – kopija.png";

import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";

const Sponsors = () => {
  // const t = useTranslations("Sponsors");
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
    <section className="w-full h-[30vh] md:h-auto py-8 md:py-24">
      <motion.div
        animate={controls}
        ref={ref}
        className="flex flex-col gap-y-14"
      >
        <div className="flex items-center justify-evenly w-full p-10">
          <Image className="w-[10rem] h-[10rem]" src={Logo2} alt="raft" />
          <Image className="w-[10rem] h-[5rem]" src={wrf} alt="raft" />
          <Image className="w-[8rem] h-[10rem]" src={konjic} alt="raft" />
          <Image className="w-[10rem] h-[10rem]" src={riverGuide} alt="raft" />
        </div>
      </motion.div>
    </section>
  );
};

export default Sponsors;
