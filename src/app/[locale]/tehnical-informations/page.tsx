import { useTranslations } from "next-intl";
import React from "react";

const TehnicalInformations = () => {
  const t = useTranslations("Tehnical");
  return (
    <section className="w-full relative min-h-screen lg:h-[940px] overflow-hidden bg-gradient-to-r from-blue-900 to-cyan-700">
      <div className="flex items-center justify-center w-5/6 h-full mx-auto">
        <h1 className="text-4xl md:text-7xl uppercase font-bold text-white text-center leading-[4rem] mt-40 md:leading-[8rem]">
          {t("soon")}
        </h1>
      </div>
    </section>
  );
};

export default TehnicalInformations;
