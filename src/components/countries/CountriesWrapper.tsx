import Title from "../utils/Title";
import { useTranslations } from "next-intl";
import Countries from "./Countries";

const CountriesWrapper = () => {
  const t = useTranslations("Countries");
  return (
    <div className="flex gap-4 px-4 md:px-28 py-8 md:py-24 text-textColor">
      <Countries />
      <div className="w-[35%] text-right">
        <div className="flex flex-col">
          <span className="text-xs md:text-sm text-thirdCol font-medium">
            <span className="text-xs md:text-md font-semibold block uppercase">
              {t("title")}
            </span>
          </span>
          <h3 className={`font-bold text-6xl uppercase`}>{t("event")}</h3>
        </div>
        <div className="text-justify">
          <p className="text-md my-5">{t("desc1")}</p>
          <p className="text-md">{t("desc2")}</p>
        </div>
      </div>
    </div>
  );
};

export default CountriesWrapper;
