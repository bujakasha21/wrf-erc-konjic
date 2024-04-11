import Image from "next/image";
import React from "react";

import neretva from "@/assets/city/neretva.jpg";
import { useTranslations } from "next-intl";
import Title from "../utils/Title";

const Nerertva = () => {
  const t = useTranslations("Neretva");
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between px-28 py-24 h-full gap-x-8">
        <Image height={800} width={800} src={neretva} alt="Neretva" />
        <div className="flex flex-col text-left gap-y-4 mt-10 w-[70%]">
          <Title textSize="text-3xl" translation="Neretva" />
          <p className="text-md my-5">{t("desc1")}</p>
          <p className="text-md">{t("desc2")}</p>
        </div>
      </div>
    </section>
  );
};

export default Nerertva;
