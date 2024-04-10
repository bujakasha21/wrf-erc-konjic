import HeroSection from "@/app/[locale]/components/HeroSection";
// import Organization from "@/app/[locale]/components/Organization";
import Sponsors from "@/app/[locale]/components/Sponsors";
import AboutEvent from "@/app/[locale]/components/aboutEvent";
import Organization from "@/app/[locale]/components/organization/Organization";
import Countries from "./components/Countries";

import React from "react";
import Gallery from "@/app/[locale]/components/gallery/Gallery";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutEvent />
      <Sponsors />
      <Organization />
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
      <div className="h-screen flex flex-col justify-end">
        <h2>
          OVDJE BI TREBALO DA IDE NESTO VEZANO RAFTING NA NERETVI I KONJICU,
          tekst, mapa, pa na kraju ovaj slider? Tj mislim se 2 sekcije, bez
          animacija, samo sa infomracijama, tipa mapa, tipa o nerertvi, konjicu
          i nakon toga ide onaj slider sa slikama. Na samoma kraju cemo
          izlistati sponzore ili tako nesto. Sta mislis?
        </h2>

        <div className="w-full h-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23094.966645462824!2d17.962163699999998!3d43.6508557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f51251f89ada3%3A0x367c33eb042772b!2sKonjic!5e0!3m2!1sen!2sba!4v1712707609346!5m2!1sen!2sba"
            width="600"
            height="450"
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <Gallery />
    </div>
  );
}
