import React from "react";

import { useLocale, useTranslations } from "next-intl";
interface TitleProps {
  translation: string;
}

const Title = ({ translation }: TitleProps) => {
  const t = useTranslations(translation);
  return (
    <div className="flex flex-col text-3xl">
      <span className="text-xs md:text-sm text-thirdCol font-medium">
        <span className="text-xs md:text-md font-semibold block uppercase">
          {t("title")}
        </span>
      </span>
      <h3 className="font-bold text-6xl uppercase">{t("event")}</h3>
    </div>
  );
};

export default Title;
