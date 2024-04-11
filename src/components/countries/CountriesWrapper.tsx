"use client";
import Title from "../utils/Title";
import { useTranslations } from "next-intl";
import Countries from "./Countries";

const CountriesWrapper = () => {
  const t = useTranslations("Countries");
  return (
    <div className="flex gap-4 px-4 md:px-28 py-8 md:py-24 text-textColor">
      <Countries />
      <div className="w-[35%] text-right">
        <Title translation="Countries" />
        <div className="text-justify">
          <p className="text-md my-5">{t("desc1")}</p>
          <p className="text-md">{t("desc2")}</p>
        </div>
      </div>
    </div>
  );
};

export default CountriesWrapper;
