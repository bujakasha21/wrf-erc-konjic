import HeroSection from "@/components/HeroSection";
import Organization from "@/components/Organization";
import Sponsors from "@/components/Sponsors";
import AboutEvent from "@/components/aboutEvent";

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
