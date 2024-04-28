import React from "react";

import HeroSection from "@/components/home/HeroSection";
import AboutEvent from "@/components/about/AboutEvent";
import Organization from "@/components/organization/Organization";
import Sponsors from "@/components/sponsors/Sponsors";

import Gallery from "@/components/gallery/Gallery";
import Konjic from "@/components/konjic/Konjic";

// import Map from "@/components/Map";

import CountriesWrapper from "@/components/countries/CountriesWrapper";

import NeretvaWrapper from "@/components/neretva/NeretvaWrapper";
import AccommodationWrapper from "@/components/accommodation/AccommodationWrapper";
import Volontiranje from "@/components/volontiranje/Volontiranje";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutEvent />
      <Sponsors />
      <Organization />
      <CountriesWrapper />
      <Volontiranje />
      <Konjic />
      <Gallery />
      <NeretvaWrapper />
      <AccommodationWrapper />
    </>
  );
}
