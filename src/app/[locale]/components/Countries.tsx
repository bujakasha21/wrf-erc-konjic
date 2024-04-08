"use client";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image"; // Ensure you're importing Image from 'next/image'
import countries from "@/data/countries.json";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import germany from "@/assets/countries/germany.jpg";
import useWindowDimensions from "@/hooks/useWindowDimensions";
interface ColumnProps {
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
      className={`w-[10vw] h-full flex flex-col min-w-[100px] relative ${
        start ? "-top-[45%]" : "-top-[25%]"
      }`}
      style={{ y: motionValue }}
    >
      {countryFlags.map(({ src, alt }, index) => (
        <div key={index} className="w-full h-full relative mb-5">
          <Image
            src={germany}
            alt={alt}
            width={300}
            height={500}
            unoptimized={true}
            loading="lazy"
            className={`object-cover h-auto`}
          />
        </div>
      ))}
    </motion.div>
  );
};
type Transforms = {
  [key: `y${number}`]: MotionValue;
};

const Countries = () => {
  const { height } = useWindowDimensions();
  const ref = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const tranforms: Transforms = {
    y1: useTransform(scrollYProgress, [0, 1], [0, height]),
    y2: useTransform(scrollYProgress, [0, 1], [0, -height]),
    y3: useTransform(scrollYProgress, [0, 1], [0, height * 1.2]),
    y4: useTransform(scrollYProgress, [0, 1], [0, -height * 1.1]),
    y5: useTransform(scrollYProgress, [0, 1], [0, height * 1.1]),
  };

  const { countryCodes } = countries;
  const numberOfColumns = 5;
  const chunkSize = useMemo(
    () => Math.ceil(countryCodes.length / numberOfColumns),
    [countryCodes]
  );

  return (
    <div
      ref={ref}
      className=" h-[120vh] py-12 flex justify-center gap-[2vw]  p-[2vw] overflow-hidden "
    >
      {Array.from({ length: numberOfColumns }).map((_, columnIndex) => {
        const motionValue = tranforms[`y${columnIndex + 1}`];
        return (
          <Column
            key={columnIndex}
            start={columnIndex * chunkSize}
            end={Math.min((columnIndex + 1) * chunkSize, countryCodes.length)}
            countryCodes={countryCodes}
            motionValue={motionValue}
          />
        );
      })}
    </div>
  );
};

export default Countries;
