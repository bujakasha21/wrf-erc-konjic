import Image from "next/image";
import React from "react";

import Section2 from "@/assets/about1.jpg";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Button from "../utils/Buttons";
import Magnetic from "../utils/Magnetic";
import MotionButton from "../utils/MotionButton";

const AboutEvent = () => {
  const locale = useLocale();
  const t = useTranslations("Event");
  return (
    <section
      id="event"
      className="w-full relative h-screen md:h-fit overflow-hidden"
    >
      <div className="flex absolute px-4 md:px-28 items-start justify-between inset-0 h-full mx-auto">
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="w-full md:w-1/2 text-center md:text-left mt-20 text-titleCol flex flex-col gap-y-8"
        >
          <div className="flex flex-col">
            <span className="text-xs md:text-sm text-thirdCol font-medium text-left">
              <span className="text-xs md:text-md font-semibold block uppercase ">
                {t("title")}
              </span>
            </span>
            <h3
              className={`font-bold text-3xl xl:text-6xl uppercase text-left`}
            >
              {t("event")}
            </h3>
          </div>
          <div className="flex flex-col gap-y-4">
            <h6 className="text-lg font-bold text-justify">{t("desc1")}</h6>
            <p className="text-base text-textColor text-justify">
              {t("desc2")}
            </p>
            <div className="flex items-center justify-start mt-4">
              <Magnetic>
                <Button
                  px="px-0"
                  py={`${
                    locale === "en" ? "py-[3.5rem]" : "py-[3.2rem]"
                  }  text-xs relative`}
                >
                  <Link
                    href={`${locale}/tehnical-informations`}
                    className="w-1/2 block mx-auto"
                  >
                    {t("button")}
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-full h-full">
        <Image className="w-full h-full object-cover" src={Section2} alt="" />
      </div>
    </section>
  );
};

export default AboutEvent;
