import Image from "next/image";
import React from "react";

import Section2 from "@/assets/section2.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Button from "../utils/Buttons";

const AboutEvent = () => {
  const locale = useLocale();
  const t = useTranslations("Event");
  return (
    <section className="w-full relative overflow-hidden ">


      <div className="flex absolute px-4 md:px-28 items-start justify-between inset-0 h-full mx-auto">
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="w-full md:w-1/2 text-center md:text-left mt-20 text-titleCol flex flex-col gap-y-8"
        >
          <div className="flex flex-col text-3xl uppercase">
            <span className="block mb-4 text-xs md:text-sm text-thirdCol font-medium">
              <span className="text-xs md:text-xl font-semibold block">
                About the WRF
              </span>
            </span>
            <h3 className="font-bold text-5xl">{t("event")}</h3>
          </div>
          <div className="flex flex-col gap-y-4">
            <h6 className="text-xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ullam in quas nesciunt pariatur accusantium neque mollitia dolor
              dolorem?
            </h6>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum
              nulla neque magni reprehenderit mollitia, atque perspiciatis amet
              vitae fugiat et asperiores sed iste saepe excepturi autem
              architecto vero delectus!
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <Button>
                <Link href={`/${locale}/tehnical-informations`}>
                  {t("button")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="hidden md:flex items-end justify-end md:w-[15rem] lg:w-[20rem] h-full"
        >
          <p className="text-secCol font-bold">
            The event organiser is ADDA VIVA INDOMITA VALTELLINA RIVER, the
            number-one rafting and outdoor centre in LOMBARDY.
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end w-full h-full">
        <Image
          className="h-[90vh] md:w-[43rem] lg:w-[53rem]"
          src={Section2}
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutEvent;
