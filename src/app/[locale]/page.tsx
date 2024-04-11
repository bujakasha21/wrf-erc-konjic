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
      <div>
        <div className="text-6xl font-bold  px-[10%] mb-24">
          <span className="block mb-4 text-xs md:text-sm text-thirdCol font-medium">
            WRF 2024
          </span>
          <h3 className="font-bold text-titleCol text-7xl">
            Over 30 countries
          </h3>
        </div>
      </div>
      <Countries />
      <Gallery />
    </div>
  );
}
