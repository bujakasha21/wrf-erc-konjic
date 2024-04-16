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
      <div className="flex flex-col lg:flex-row items-start justify-between px-4 py-4  xl:px-28 xl:pt-24 h-full gap-x-s8 overflow-hidden">
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="flex flex-col text-left gap-y-4 mt-10 w-full xl:w-[60%]"
        >
          {children}
        </div>
        <div className="w-full h-full relative ">
          <Image
            src={neretva}
            className="xl:absolute w-full h-auto object-cover xl:-right-[30%] relative translate-y-10 translate-x-12 xl:translate-x-0 xl:translate-y-0"
            alt="Neretva"
          />
        </div>
      </div>
      <motion.div
        className="relative w-full z-[20] hidden xl:block"
        style={{ height }}
      >
        <div className="h-[1550%] w-[110%] bg-[#f2f2f2] -left-[10%] z-1 absolute inset-0 rounded-b shadow-xl "></div>
      </motion.div>
    </section>
  );
};

export default Nerertva;
