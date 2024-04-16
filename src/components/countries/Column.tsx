"use client";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image"; // Ensure you're importing Image from 'next/image'
import { MotionValue, motion } from "framer-motion";

import croatia from "@/assets/countries/croatia.png";
import serbia from "@/assets/countries/serbia.png";
import bosnia from "@/assets/countries/bosnia.png";
import montenegro from "@/assets/countries/cg.png";
import slovenia from "@/assets/countries/slovenia.png";
import italy from "@/assets/countries/italy.png";
import turkey from "@/assets/countries/turkey.png";
import czech from "@/assets/countries/czech.png";
import france from "@/assets/countries/france.png";
import austria from "@/assets/countries/austria.png";
import bulgaria from "@/assets/countries/bulgaria.png";
import ukraine from "@/assets/countries/ukraine.png";

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
      className={`w-[30vw] h-full  flex flex-col gap-2 min-w-[100px] relative  ${
        start === 6 && "-top-[100%] md:-top-[50%]"
      }`}
      style={{ y: motionValue }}
    >
      {countryFlags.map(({ src, alt }, index) => (
        <div key={index} className="w-full px-4 md:px-6 relative">
          <Image
            src={croatia}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={serbia}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={bosnia}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={montenegro}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={slovenia}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[4rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={italy}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={turkey}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={italy}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={czech}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={france}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={austria}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={bulgaria}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
          <Image
            src={ukraine}
            alt={alt}
            width={200}
            height={500}
            className="w-full h-[5rem] my-2 md:h-[15rem] rounded-md"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Column;
