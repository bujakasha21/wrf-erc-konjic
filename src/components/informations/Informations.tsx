import React from "react";
import DownloadButton from "@/components/informations/downloadButton";
import { useTranslations } from "next-intl";

const Informations = () => {
  const t = useTranslations("Tehnical");
  return (
    <div className="w-full overflow-hidden px-6 md:px-28 py-20">
      <div className="flex flex-col w-full items-start">
        <h3 className="text-4xl font-semibold text-gray-700">{t("info1")}</h3>
        <hr className="w-full my-8 border-[1px] border-gray-300" />
        <div className="flex flex-col px-8 md:px-60 my-14 w-full">
          <DownloadButton
            fileUrl="/download/EventAbout.pdf"
            fileName="Informations About Event"
          />
          <hr className=" my-4" />
          <DownloadButton
            fileUrl="/download/BS-raspored.jpg"
            fileName="BS Raspored Takmicenja"
          />
          <hr className=" my-4" />
          <DownloadButton
            fileUrl="/download/ENG-schedule.jpg"
            fileName="ENG Tournament Schedule"
          />
        </div>
      </div>
    </div>
  );
};

export default Informations;
