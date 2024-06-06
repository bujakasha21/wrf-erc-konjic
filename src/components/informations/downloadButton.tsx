"use client";

import Image from "next/image";
import React from "react";

import download from "@/assets/download (1).png";

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileName,
  fileUrl,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <button
          onClick={handleDownload}
          className=" text-secCol hover:underline hover:underline-offset-4"
        >
          {fileName}
        </button>
        <button onClick={handleDownload}>
          <Image src={download} width={25} alt="" />
        </button>
      </div>
    </>
  );
};

export default DownloadButton;
