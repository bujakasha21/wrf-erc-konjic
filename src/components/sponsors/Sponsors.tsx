import Image from "next/image";
import riverGuide from "@/assets/riverguide.png";
import Logo2 from "@/assets/logo2.png";
import wrf from "@/assets/logo_wrf_white.png";
import konjic from "@/assets/logo-komplet-removebg-preview – kopija.png";

import React from "react";
import { useTranslations } from "next-intl";

const Sponsors = () => {
  // const t = useTranslations("Sponsors");
  return (
    <section className="w-full h-[100px] md:h-auto my-10">
      <div className="flex flex-col gap-y-14">
        {/* <h1 className="font-bold text-titleCol text-7xl uppercase text-left">
          {t("title")}
        </h1> */}
        <div className="flex items-center justify-evenly w-full p-10">
          <Image className="w-[10rem] h-[10rem]" src={Logo2} alt="raft" />
          <Image className="w-[10rem] h-[5rem]" src={wrf} alt="raft" />
          <Image className="w-[8rem] h-[10rem]" src={konjic} alt="raft" />
          <Image className="w-[10rem] h-[10rem]" src={riverGuide} alt="raft" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
