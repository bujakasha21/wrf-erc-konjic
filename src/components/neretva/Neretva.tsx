"use client";
import Image from "next/image";
import React, { ReactNode, useRef } from "react";

import neretva from "@/assets/city/neretva.jpg";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import Title from "../utils/Title";

const Nerertva = ({ children }: { children: ReactNode }) => {
  const thirdSectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: thirdSectionRef,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [80, 0]);
  return (
    <section ref={thirdSectionRef} className="w-full ">
      <div className="flex flex-col lg:flex-row items-start justify-between px-4 py-4  xl:px-28 xl:pt-24 h-full gap-x-s8 overflow-hidden">
        <div className="flex flex-col text-left gap-y-4 mt-10 w-[60%]">
          {/* <Title textSize="text-3xl" translation="Neretva" /> */}
          {children}
        </div>
        <div className="w-full h-full relative pt-20">
          <Image
            src={neretva}
            className="absolute w-full h-auto object-cover"
            alt="Neretva"
          />
        </div>
      </div>
      <motion.div
        className="relative w-full z-[20]"
        style={{ height }}
        data-scroll
        data-scroll-speed="0.01"
      >
        <div className="h-[1550%] w-[120%] bg-[#f2f2f2] -left-[10%] z-1 absolute inset-0 rounded-b-full shadow-xl "></div>
      </motion.div>
    </section>
  );
};

export default Nerertva;
