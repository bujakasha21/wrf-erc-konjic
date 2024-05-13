import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import contact from "@/assets/contactheader.jpg";

const ContactHeading = () => {
  const t = useTranslations("Contact");
  return (
    <div className="relative w-full h-screen md:h-[700px]">
      <div
        data-scroll
        data-scroll-speed="0.2"
        className="absolute w-full md:w-2/3 px-4 md:px-28 flex flex-col text-left md:items-start justify-center pt-60"
      >
        <span className="text-xs md:text-md text-thirdCol font-medium text-left">
          <span className="pb-6 font-semibold block uppercase ">
            {t("contact")}
          </span>
        </span>
        <h3
          className={`font-bold text-3xl xl:text-6xl uppercase text-left text-white`}
        >
          {t("header")}
        </h3>
        <p className="text-base md:text-xl py-5 text-white">
          {t("description")}
        </p>
      </div>
      <div className="w-full h-full">
        <Image className="w-full h-full object-cover" src={contact} alt="" />
      </div>
    </div>
  );
};

export default ContactHeading;
