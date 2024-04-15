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
    <div className="w-full h-[100vh] bg-black/40 z-10 relative overflow-hidden">
      <div className="z-10 bg-titleCol  opacity-80 absolute inest-0 w-full h-full  px-4 py-8 xl:px-28 xl:py-24 flex flex-col items-start xl:items-center justify-center xl:flex-row">
        <div className="">
          <h2 className="text-4xl xl:text-8xl uppercase text-white font-bold z-[30]  ">
            {t("title")}
          </h2>
          <p className="font-thin text-lg text-white my-8">{t("event")}</p>
        </div>
        <div className="w-full h-full relative -translate-x-12 xl:translate-x-0">
          <Image
            className="w-[15rem] h-[15rem] xl:w-[30rem] xl:h-[30rem]"
            src={whiteGardenLogo}
            alt="raft"
          />
        </div>
        <Magnetic>
          <Button py="py-[3.5rem]" px="px-[3rem] text-md">
            <Link target="_blank" href="https://nova.gardencity.ba/">
              {t("btn")}
            </Link>
          </Button>
        </Magnetic>
      </div>
      <div className="w-full h-full xl:hidden">
        <Image
          src={accomodation}
          alt="Rafting"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="hidden xl:block">
        <Accommodation />
      </div>
    </div>
  );
}
