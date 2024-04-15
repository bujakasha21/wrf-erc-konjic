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
        <span className="block mb-4 text-base md:text-lg text-thirdCol font-semibold uppercase">
          {t("contact")}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-white">
          {t("header")}
        </h1>
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
