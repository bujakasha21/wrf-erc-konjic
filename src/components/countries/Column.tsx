"use client";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image"; // Ensure you're importing Image from 'next/image'
import { motion } from "framer-motion";
import germany from "@/assets/countries/germany.jpg";
import { ColumnProps } from "@/types/interfaces/countries.interface";

const Column: FC<ColumnProps> = ({ start, end, countryCodes, motionValue }) => {
  const countryFlags = useMemo(() => {
    return countryCodes.slice(start, end).map((iso) => ({
      src: `https://flagcdn.com/256x192/${iso.toLowerCase()}.webp`,
      alt: iso,
    }));
  }, [start, end, countryCodes]);
  // ${
  //   start ? "-top-[200%]" : "-top-[25%]"
  // }

  console.log(start);
  return (
    <motion.div
      className={`w-[30vw] h-full flex flex-col gap-4 min-w-[100px] relative  ${
        start === 6 && "-top-[50%]"
      }`}
      style={{ y: motionValue }}
    >
      {countryFlags.map(({ src, alt }, index) => (
        <div key={index} className="w-full h-fullrelative shadow-md">
          <Image
            src={germany}
            alt={alt}
            width={300}
            height={500}
            className="w-full h-[20rem]"
            loading="lazy"
            // className={`object-cover h-auto w-full`}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Column;
