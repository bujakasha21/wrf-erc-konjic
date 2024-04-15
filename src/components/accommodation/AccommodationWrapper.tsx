import React from "react";

import Magnetic from "../utils/Magnetic";

import whiteGardenLogo from "@/assets/gardenCityLogoWhite.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "../utils/Buttons";
import Accommodation from "./Accommodation";

export default function AccommodationWrapper() {
  const t = useTranslations("Accommodation");
  return (
    <div className="w-full h-[120vh] pt-16 md:h-[100vh] bg-black/40 z-10 relative overflow-hidden">
      <div className="z-10 bg-titleCol opacity-80 absolute inset-0 w-full h-full px-4 py-4 xl:px-28 xl:py-24 flex md:flex-row flex-col items-center justify-center">
        <div className="pt-20 md:scroll-pt-30">
          <h2 className="text-5xl md:text-8xl uppercase text-white font-bold z-[30]">
            {t("title")}
          </h2>
          <p className="font-thin text-lg text-white my-8">{t("event")}</p>
        </div>
        <div className="w-full h-full opacity-70">
          <Image
            className="w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem]"
            src={whiteGardenLogo}
            alt="raft"
          />
        </div>
        <Magnetic>
          <Button>
            <span>{t("btn")}</span>
          </Button>
        </Magnetic>
      </div>
      <Accommodation />
    </div>
  );
}
