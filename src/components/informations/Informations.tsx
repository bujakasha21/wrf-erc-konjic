import React from "react";
import DownloadButton from "@/components/informations/downloadButton";

const Informations = () => {
  return (
    <div className="w-full overflow-hidden px-28 py-20">
      <div className="flex flex-col w-full items-start">
        <h3 className="text-4xl font-semibold text-gray-700">Informacije</h3>
        <hr className="w-full my-8 border-[1px] border-gray-300" />
        <div className="flex flex-col px-60 my-14 w-full">
          <DownloadButton
            fileUrl="/EventAbout.pdf"
            fileName="Informations About Event"
          />
          <hr className=" my-4" />
          <DownloadButton
            fileUrl="/BS-raspored.jpg"
            fileName="BS Raspored Takmicenja"
          />
          <hr className=" my-4" />
          <DownloadButton
            fileUrl="/ENG-schedule.jpg"
            fileName="ENG Tournament Schedule"
          />
        </div>
      </div>
    </div>
  );
};

export default Informations;
