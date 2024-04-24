import React from "react";
import Magnetic from "../utils/Magnetic";
import Button from "../utils/Buttons";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Volontiranje = () => {
  const locale = useLocale();
  const t = useTranslations("Volunteering");
  return (
    <section className="w-full h-screen md:h-[300px]">
      <div className="flex flex-col md:flex-row items-center justify-between h-full px-28">
        <div className="flex flex-col gap-y-8 w-3/4">
          <h1 className="text-5xl font-bold uppercase">{t("heading")}</h1>
          <p className="w-2/3">{t("description")}</p>
        </div>
        <div>
          <Magnetic>
            <Button
              px="px-7"
              py={`${
                locale === "en" ? "py-[2rem]" : "py-[2rem]"
              }  text-xs relative`}
            >
              <Link href={`#`} className="block mx-auto">
                {t("button")}
              </Link>
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Volontiranje;
