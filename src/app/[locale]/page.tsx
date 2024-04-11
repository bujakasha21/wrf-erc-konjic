import React from "react";

import HeroSection from "@/components/home/HeroSection";
import AboutEvent from "@/components/about/AboutEvent";
import Organization from "@/components/organization/Organization";
import Sponsors from "@/components/sponsors/Sponsors";
import Countries from "@/components/countries/Countries";
import Gallery from "@/components/gallery/Gallery";
import Konjic from "@/components/konjic/Konjic";
import Nerertva from "@/components/neretva/Neretva";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutEvent />
      <Organization />
      <Konjic />
      <Nerertva />
      <Sponsors />
      <Map />
      <Countries />
      <Gallery />
    </div>
  );
}
