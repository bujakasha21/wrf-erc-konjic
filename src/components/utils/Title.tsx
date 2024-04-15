import React from "react";

import { useLocale, useTranslations } from "next-intl";
interface TitleProps {
  translation: string;
  textSize?: string;
}

const Title = ({ translation, textSize }: TitleProps) => {
  const t = useTranslations(translation);
  return (
    <div className="flex flex-col">
      <span className="text-xs md:text-sm text-thirdCol font-medium">
        <span className="text-xs md:text-md font-semibold block uppercase">
          {t("title")}
        </span>
      </span>
      <h3 className={`font-bold ${textSize ? textSize : "text-6xl"} uppercase`}>
        {t("event")}
      </h3>
    </div>
  );
};

export default Title;
