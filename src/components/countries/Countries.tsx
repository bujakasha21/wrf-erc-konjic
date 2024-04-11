"use client";
import { useMemo, useRef } from "react";

import countries from "@/data/countries.json";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Transforms } from "@/types/interfaces/countries.interface";
import Column from "./Column";

const Countries = () => {
  const { height } = useWindowDimensions();
  const ref = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const tranforms: Transforms = {
    y1: useTransform(scrollYProgress, [0, 1], [0, -height * 2]),
    y2: useTransform(scrollYProgress, [0, 1], [0, height * 1]),
    y3: useTransform(scrollYProgress, [0, 1], [0, -height * 2]),
    // y4: useTransform(scrollYProgress, [0, 1], [0, -height * 1.1]),
    // y5: useTransform(scrollYProgress, [0, 1], [0, height * 1.1]),
  };

  const { countryCodes } = countries;
  const numberOfColumns = 3;
  const chunkSize = useMemo(
    () => Math.ceil(countryCodes.length / numberOfColumns),
    [countryCodes]
  );

  return (
    <>
      <div>
        <div className="text-6xl font-bold  px-[10%] mb-24">
          <span className="block mb-4 text-xs md:text-sm text-thirdCol font-medium">
            WRF 2024
          </span>
          <h3 className="font-bold text-titleCol text-7xl">
            Over 30 countries
          </h3>
        </div>
      </div>

      <div
        ref={ref}
        className=" h-[100vh] flex w-full gap-[2vw] justify-center overflow-hidden "
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
    </>
  );
};

export default Countries;
