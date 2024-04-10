import HeroSection from "@/app/[locale]/components/HeroSection";
import Organization from "@/app/[locale]/components/Organization";
import Sponsors from "@/app/[locale]/components/Sponsors";
import AboutEvent from "@/app/[locale]/components/aboutEvent";
import Countries from "@/app/[locale]/components/Countries";
import Gallery from "@/app/[locale]/components/gallery/Gallery";

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
