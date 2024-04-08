import Image from "next/image";
import React from "react";

import Section2 from "@/assets/section2.png";
import { useRouter } from "next/router";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const AboutEvent = () => {
  const locale = useLocale();
  const t = useTranslations("Event");
  return (
    <section className="w-full relative h-[800px] overflow-hidden bg-mainColor">
      <div className="flex absolute w-11/12 md:w-5/6 items-center justify-between inset-0 h-full mx-auto">
        <div className="w-full md:w-1/2 text-center md:text-left text-white flex flex-col gap-y-8">
          <div className="flex flex-col text-3xl uppercase">
            <h3 className="font-bold  text-5xl">{t("event")}</h3>
          </div>
          <div className="flex flex-col gap-y-4">
            <h6 className="text-xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ullam in quas nesciunt pariatur accusantium neque mollitia dolor
              dolorem?
            </h6>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum
              nulla neque magni reprehenderit mollitia, atque perspiciatis amet
              vitae fugiat et asperiores sed iste saepe excepturi autem
              architecto vero delectus!
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <Link
                href={`/${locale}/tehnical-informations`}
                className=" bg-orange-500 rounded-full py-2 px-4"
              >
                <span className="uppercase font-bold text-sm">
                  {t("button")}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-end justify-end md:w-[15rem] lg:w-[20rem] mb-[13rem] h-full">
          <p className="text-secCol font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quisquam consectetur magni soluta, eos provident perspiciatis
            nesciunt animi.
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end w-full h-full">
        <Image
          className="h-auto md:w-[43rem] lg:w-[53rem]"
          src={Section2}
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutEvent;
