import { useTranslations } from "next-intl";
import Nerertva from "./Neretva";

interface NeretvaWrapperProps {
  children: React.ReactNode;
}

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
        </div>
      </Nerertva>
    </>
  );
};

export default NeretvaWrapper;
