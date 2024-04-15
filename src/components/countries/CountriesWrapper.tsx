import Title from "../utils/Title";
import { useTranslations } from "next-intl";
import Countries from "./Countries";

const CountriesWrapper = () => {
  const t = useTranslations("Countries");
  return (
    <div className="flex flex-col-reverse md:flex-row gap-x-16 gap-y-8 px-4 md:px-28 py-8 md:py-24 text-textColor">
      <Countries />
      <div className="w-full md:w-[45%] text-right">
        <div className="flex flex-col items-center md:items-end">
          <span className="text-base md:text-xl text-thirdCol font-semibold block uppercase">
            {t("title")}
          </span>
          <h3 className={`font-bold text-3xl md:text-5xl uppercase`}>
            {t("event")}
          </h3>
        </div>
        <div className="text-justify">
          <p className="text-lg font-bold my-5">{t("desc1")}</p>
          <p className="text-md">{t("desc2")}</p>
        </div>
      </div>
    </div>
  );
};

export default CountriesWrapper;
