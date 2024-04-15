"use client";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image"; // Ensure you're importing Image from 'next/image'
import { MotionValue, motion } from "framer-motion";

import croatia from "@/assets/countries/croatia.png";
import serbia from "@/assets/countries/serbia.png";
import bosnia from "@/assets/countries/bosnia.png";
import montenegro from "@/assets/countries/cg.png";
import slovenia from "@/assets/countries/slovenia.png";
import germany from "@/assets/countries/germany.png";

export interface ColumnProps {
  start: number;
  end: number;
  countryCodes: string[];
  motionValue: MotionValue;
}

const Column: FC<ColumnProps> = ({ start, end, countryCodes, motionValue }) => {
  const countryFlags = useMemo(() => {
    return countryCodes.slice(start, end).map((iso) => ({
      src: `https://flagcdn.com/256x192/${iso.toLowerCase()}.webp`,
      alt: iso,
    }));
  }, [start, end, countryCodes]);

  return (
    <motion.div
      className={`w-[30vw] h-full flex flex-col gap-4 min-w-[100px] relative  ${
        start === 6 && "-top-[100%] md:-top-[50%]"
      }`}
      style={{ y: motionValue }}
    >
      {countryFlags.map(({ src, alt }, index) => (
        <div key={index} className="w-full px-4 md:px-10 md:h-full relative">
          <Image
            src={croatia}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] md:h-[10rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={serbia}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] md:h-[10rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={bosnia}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] md:h-[10rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={montenegro}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] md:h-[10rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={slovenia}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] md:h-[10rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={germany}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] md:h-[10rem] rounded-md"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Column;
