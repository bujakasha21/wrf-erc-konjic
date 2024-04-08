import About from "@/components/About";
import Countries from "@/components/Countries";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/gallery/Gallery";

import React from "react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <About />
      <Gallery />
      <Countries />
    </div>
  );
}
