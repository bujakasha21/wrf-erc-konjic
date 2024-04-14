import React from "react";

import HeroSection from "@/components/home/HeroSection";
import AboutEvent from "@/components/about/AboutEvent";
import Organization from "@/components/organization/Organization";
import Sponsors from "@/components/sponsors/Sponsors";
import Gallery from "@/components/gallery/Gallery";
import Konjic from "@/components/konjic/Konjic";
import Nerertva from "@/components/neretva/Neretva";
import CountriesWrapper from "@/components/countries/CountriesWrapper";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutEvent />
      <Sponsors />
      <Organization />
      <CountriesWrapper />
      <Konjic />
      <Gallery />
      <Nerertva />
    
    </div>
  );
}
