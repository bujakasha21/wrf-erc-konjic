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
      className="h-screen flex items-center justify-center sticky top-[200px]"
    >
      <motion.div
        style={{
          // backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative w-[1000px] h-[1000px]  rounded-md origin-top"
      >
        <h2 className="text-8xl font-bold absolute top-[5%] -right-[10%] text-str w-1/2 z-[20] opacity-80">
          {title}
        </h2>
        <h2 className="text-8xl font-bold absolute top-[5%] -right-[10%] text-str2 w-1/2 z-[17]">
          {title}
        </h2>
        <div>
          {/* <div>
            <p>{description}</p>
            <span>
              <a href={url} target="_blank">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div> */}

          <div className="relative w-full h-full overflow-hidden z-[18]">
            <motion.div
              className="w-full h-full "
              style={{ scale: imageScale }}
            >
              <Image
                src={`${src}`}
                alt="image"
                className="object-cover w-full h-full"
                width={800}
                height={800}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;