import React from "react";
import Magnetic from "../utils/Magnetic";
import Button from "../utils/Buttons";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import VolunteerBckg from "@/assets/volunteer/Rafting Garden ogled staze Photo Jadran Cilic_0046-copy.jpg";

const Volontiranje = () => {
  const locale = useLocale();
  const t = useTranslations("Volunteering");

  //email

  // const handleSendEmail = () => {
  //   window.location.href = 'mailto:recipient-email@example.com?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email';
  // };

  return (
    <section className="relative w-full h-screen md:h-[400px] overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="0.1"
        className="flex absolute w-full flex-col md:flex-row items-center justify-evenly md:justify-between h-full px-4 md:px-28 py-8"
      >
        <div className="flex flex-col gap-y-8 w-full md:w-3/4 text-white">
          <h1 className="text-5xl font-bold uppercase">{t("heading")}</h1>
          <p className="w-full font-medium md:w-2/3">{t("description")}</p>
        </div>
        <div className="flex items-start justify-start md:justify-end w-full md:w-1/3 mr-0 md:mr-20">
          <Magnetic>
            <Button
              px="px-7"
              py={`${
                locale === "en" ? "py-[3rem]" : "py-[3rem]"
              }  text-xs relative`}
            >
              <Link
                href="https://docs.google.com/forms/d/1dAfU5EEn8xgglUzSRTRc3DgDsPhDxU7NuedCmKrow1o/viewform?edit_requested=true"
                target="_blank"
                className="block mx-auto"
              >
                {t("button")}
              </Link>
            </Button>
          </Magnetic>
        </div>
      </div>
      <div className="w-full h-full">
        <Image
          className="h-full w-full object-cover"
          src={VolunteerBckg}
          alt="Volontiranje"
        />
      </div>
    </section>
  );
};

export default Volontiranje;
