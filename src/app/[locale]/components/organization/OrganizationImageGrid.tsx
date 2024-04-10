"use client";
import { gridImages } from "@/data/organization/gridImage";
import { shuffle } from "@/utils/helpers";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const generateSquares = () => {
  return shuffle(gridImages).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const OrganizationImageGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  const shuffleSquares = useCallback(() => {
    {
      setSquares(generateSquares());

      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    }
  }, []);

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, [shuffleSquares]);

  return (
    <div className="grid grid-cols-3 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default OrganizationImageGrid;
