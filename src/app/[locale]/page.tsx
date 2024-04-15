import React from "react";

import HeroSection from "@/components/home/HeroSection";
import AboutEvent from "@/components/about/AboutEvent";
import Organization from "@/components/organization/Organization";
import Sponsors from "@/components/sponsors/Sponsors";

import Gallery from "@/components/gallery/Gallery";
import Konjic from "@/components/konjic/Konjic";

// import Map from "@/components/Map";

import CountriesWrapper from "@/components/countries/CountriesWrapper";
import ReactPlayer from "react-player/youtube";
import Accommodation from "@/components/accommodation/Accommodation";
import NeretvaWrapper from "@/components/neretva/NeretvaWrapper";

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
      <NeretvaWrapper />
      <Accommodation />
    </div>
  );
}
