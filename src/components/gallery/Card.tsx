"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { FC, useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: any;
  url?: string;
  color: string;
  progress: any;
  range: any;
  targetScale: any;
}

const Card: FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url = "#",
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-[50px] md:top-[200px]"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative w-[950px] h-[1000px] rounded-md origin-top"
      >
        <h2 className="text-3xl md:text-6xl font-bold absolute top-[1%] left-[5%] xl:left-[10%] text-str w-1/2 z-[20] opacity-80">
          {title}
        </h2>
        <p className="bg-black/80 p-4 rounded-md text-xs xl:text-xl font-thin absolute text-white top-[12%] xl:top-[30%] left-[5%] xl:left-[10%] xl:w-1/2   w-4/5 z-[20]">
          {description}
        </p>

        <div>
          <div className="relative w-full h-full overflow-hidden z-[18] rounded-md">
            <motion.div
              className="w-full h-full "
              style={{ scale: imageScale }}
            >
              <Image
                src={src}
                alt="image"
                className="object-cover w-full h-full rounded-md"
                width={700}
                height={700}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
