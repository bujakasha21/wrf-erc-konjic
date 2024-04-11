"use client";
import { gridImages } from "@/data/organization/gridImage";
import { shuffle } from "@/utils/helpers";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const OrganizationImageGrid = () => {
  const [squares, setSquares] = useState(gridImages);
  const squaresRef = useRef(squares);

  useEffect(() => {
    // Update ref on each render to always have the latest state
    squaresRef.current = squares;

    const intervalTimer = setInterval(() => {
      const shuffled = shuffle([...squaresRef.current]);
      setSquares(shuffled);
    }, 3000);

    // Clean up the timeout if the component unmounts
    return () => clearInterval(intervalTimer);
  }); // Empty dependency array means this effect runs only once after initial mount

  return (
    <div
      data-scroll
      data-scroll-speed="0.2"
      className="grid grid-cols-3 grid-rows-4 h-[450px] gap-1"
    >
      {squares.map((sq) => (
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
      ))}
    </div>
  );
};

export default OrganizationImageGrid;
