import React from "react";

import konjic from "@/assets/city/konjic.jpg";
import Image from "next/image";
import Title from "../utils/Title";
import { useTranslations } from "next-intl";

const Konjic = () => {
  const t = useTranslations("Konjic");
  return (
    <section id="lokacija" className="w-full py-14 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between px-4 md:px-28 h-full gap-x-8">
        <div className="flex flex-col text-left gap-y-4 mt-10 w-full md:w-[70%]">
          <div className="flex flex-col">
            <span className="text-base md:text-lg text-thirdCol font-semibold block uppercase">
              {t("title")}
            </span>

            <h3 className={`font-bold text-3xl md:text-5xl uppercase`}>
              {t("event")}
            </h3>
          </div>
          <p className="text-md my-5">{t("desc1")}</p>
          <p className="text-md">{t("desc2")}</p>
        </div>
        <Image
          height={450}
          width={550}
          src={konjic}
          alt="konjic"
          className="rouded-md pt-0 md:pt-12"
        />
      </div>
    </section>
  );
};

export default Konjic;
