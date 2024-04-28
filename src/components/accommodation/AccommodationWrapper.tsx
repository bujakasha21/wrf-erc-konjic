import React from "react";

import Magnetic from "../utils/Magnetic";
import accomodation from "@/assets/accomodation.jpg";
import whiteGardenLogo from "@/assets/gardenCityLogoWhite.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "../utils/Buttons";
import Accommodation from "./Accommodation";
import Link from "next/link";

export default function AccommodationWrapper() {
  const t = useTranslations("Accommodation");
  return (
    <section className="w-full h-[100vh] bg-black/40 z-10 relative overflow-hidden">
      <div className="z-10 bg-titleCol  opacity-80 absolute inest-0 w-full h-full px-8 py-14 md:px-28 md:py-24 flex flex-col items-start md:items-center justify-center md:flex-row">
        <div data-scroll data-scroll-speed="0.2" className="">
          <h2 className="text-4xl md:text-6xl uppercase text-white font-bold z-[30]  ">
            {t("title")}
          </h2>
          <p className="font-thin text-lg text-white my-8">{t("event")}</p>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="w-full h-full relative -translate-x-12 md:translate-x-0"
        >
          <Image
            className="w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem]"
            src={whiteGardenLogo}
            alt="raft"
          />
        </div>
        <Magnetic>
          <Button py="py-[3.5rem]" px="px-[2rem] text-md">
            <Link target="_blank" href="https://nova.gardencity.ba/">
              {t("btn")}
            </Link>
          </Button>
        </Magnetic>
      </div>
      <div className="w-full h-full lg:hidden">
        <Image
          src={accomodation}
          alt="Rafting"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="hidden lg:block">
        <Accommodation />
      </div>
    </section>
  );
}
