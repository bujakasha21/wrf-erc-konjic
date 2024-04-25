"use client";
import Image from "next/image";
import React, { ReactNode, useRef } from "react";

import neretva from "@/assets/city/neretva.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

const Nerertva = ({ children }: { children: ReactNode }) => {
  const thirdSectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: thirdSectionRef,
    offset: ["-100px end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [100, 0]);
  return (
    <section ref={thirdSectionRef} className="w-full">
      <div className="flex flex-col lg:flex-row items-start justify-between px-4 py-4 md:px-28 lg:pt-24 h-full gap-x-8 overflow-hidden">
        <div className="flex flex-col text-left gap-y-4 mt-10 w-full md:w-[70%]">
          {/* <Title textSize="text-3xl" translation="Neretva" /> */}
          {children}
        </div>
        <div className="w-full h-full relative ">
          <Image
            src={neretva}
            className="md:absolute w-full h-auto object-cover md:-right-[30%]"
            alt="Neretva"
          />
        </div>
      </div>
      <motion.div
        className="relative w-full z-[20] hidden md:block"
        style={{ height }}
      >
        <div className="h-[1250%] w-[100%] bg-[#f2f2f2] z-1 absolute inset-0 rounded-b-full shadow-xl "></div>
      </motion.div>
    </section>
  );
};

export default Nerertva;
