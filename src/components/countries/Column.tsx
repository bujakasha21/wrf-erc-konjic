"use client";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image"; // Ensure you're importing Image from 'next/image'
import { MotionValue, motion } from "framer-motion";
import { countryFlags } from "@/data/country-flags";

export interface ColumnProps {
  start: number;
  end: number;
  motionValue: MotionValue;
}

const Column: FC<ColumnProps> = ({ start, end, motionValue }) => {
  const flags = useMemo(() => {
    return countryFlags.slice(start, end).map((iso) => iso);
  }, [start, end]);

  return (
    <motion.div
      className={`w-[30vw] h-full flex flex-col gap-4 min-w-[100px] relative 
     ${start === 4 ? "top-[100%] xl:top-[50%]" : "-top-[100%] xl:-top-[60%]"}
  
      `}
      style={{ y: motionValue }}
    >
      {flags.map((img, i) => {
        return (
          <Image
            key={i}
            src={img}
            alt="Country"
            width={200}
            height={500}
            loading="lazy"
          />
        );
      })}
    </motion.div>
  );
};

export default Column;
