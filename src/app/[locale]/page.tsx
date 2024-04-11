import React from "react";

import HeroSection from "@/components/home/HeroSection";
import AboutEvent from "@/components/about/AboutEvent";
import Organization from "@/components/organization/Organization";
import Sponsors from "@/components/sponsors/Sponsors";
import Countries from "@/components/countries/Countries";
import Gallery from "@/components/gallery/Gallery";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutEvent />
      <Sponsors />
      <Organization />

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
