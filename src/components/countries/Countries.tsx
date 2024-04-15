"use client";
import { useMemo, useRef } from "react";

import countries from "@/data/countries.json";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

import useWindowDimensions from "@/hooks/useWindowDimensions";

import Column from "./Column";

export type Transforms = {
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
    y1: useTransform(scrollYProgress, [0, 1], [0, -height * 1.5]),
    y2: useTransform(scrollYProgress, [0, 1], [0, height * 1]),
    y3: useTransform(scrollYProgress, [0, 1], [0, -height * 1.5]),
  };

  const { countryCodes } = countries;
  const numberOfColumns = 3;
  const chunkSize = useMemo(
    () => Math.ceil(countryCodes.length / numberOfColumns),
    [countryCodes]
  );

  return (
    <div
      ref={ref}
      className="h-[60vh] md:h-[100vh] flex w-full gap-[2vw] justify-center overflow-hidden "
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
