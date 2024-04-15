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
    <div className="w-full h-[100vh] bg-black/40 z-10 relative overflow-hidden">
      <div className="z-10 bg-titleCol  opacity-80 absolute inest-0 w-full h-full  px-4 py-4  xl:px-28 xl:py-24 flex items-center justify-center">
        <div className="">
          <h2 className="text-8xl uppercase text-white font-bold  z-[30]  ">
            {t("title")}
          </h2>
          <p className="font-thin text-lg text-white  my-8">{t("event")}</p>
        </div>
        <div className="w-full h-full opacity-70">
          <Image
            className="w-[30rem] h-[30rem]"
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
