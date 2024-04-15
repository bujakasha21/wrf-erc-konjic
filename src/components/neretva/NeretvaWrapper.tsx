import { useTranslations } from "next-intl";
import Nerertva from "./Neretva";

const NeretvaWrapper = () => {
  const t = useTranslations("Neretva");
  return (
    <>
      <Nerertva>
        <div className="flex flex-col">
          <span className="text-xs md:text-sm text-thirdCol font-medium">
            <span className="text-xs md:text-md font-semibold block uppercase">
              {t("title")}
            </span>
          </span>
          <h3 className={`font-bold text-6xl uppercase`}>{t("event")}</h3>
          <p className="text-md my-5">{t("desc1")}</p>
          <p className="text-md">{t("desc2")}</p>
        </div>
      </Nerertva>
    </>
  );
};

export default NeretvaWrapper;
