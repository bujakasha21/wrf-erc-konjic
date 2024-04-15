import { useTranslations } from "next-intl";
import Nerertva from "./Neretva";

const NeretvaWrapper = () => {
  const t = useTranslations("Neretva");
  return (
    <div className="flex md:flex-row flex-col">
      <Nerertva>
        <div className="flex flex-col text-justify">
          <span className="text-xs md:text-sm text-thirdCol font-medium">
            <span className="text-xs md:text-md font-semibold block uppercase">
              {t("title")}
            </span>
          </span>
          <h3 className={`font-bold text-5xl uppercase`}>{t("event")}</h3>
          <p className="text-md my-5">{t("desc1")}</p>
          <p className="text-md">{t("desc2")}</p>
        </div>
      </Nerertva>
    </div>
  );
};

export default NeretvaWrapper;
