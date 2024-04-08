import HeroSection from "@/app/[locale]/components/HeroSection";
import Organization from "@/app/[locale]/components/Organization";
import Sponsors from "@/app/[locale]/components/Sponsors";
import AboutEvent from "@/app/[locale]/components/aboutEvent";

import React from "react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutEvent />
      <Organization />
      <Sponsors />
    </div>
  );
}
