"use client";
// import projects from "@/data/gallery/gallery.json";
import { galleryData } from "@/data/gallery/gallery-data";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useMemo, useRef } from "react";
import { useLocale } from "next-intl";

export default function Gallery() {
  const locale = useLocale();
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const projects = useMemo(() => {
    return galleryData(locale);
  }, [locale]);

  return (
    <main ref={container} className="w-full relative mt-[300px]">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
