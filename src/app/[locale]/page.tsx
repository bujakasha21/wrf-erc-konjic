import HeroSection from "@/app/[locale]/components/HeroSection";
import Organization from "@/app/[locale]/components/Organization";
import Sponsors from "@/app/[locale]/components/Sponsors";
import AboutEvent from "@/app/[locale]/components/aboutEvent";
import Gallery from "./components/gallery/Gallery";
import Countries from "./components/Countries";

import React from "react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutEvent />
      <Organization />
      <Sponsors />
      <Gallery />
      <Countries />
    </div>
  );
}
