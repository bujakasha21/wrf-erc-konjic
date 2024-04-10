import Image from "next/image";
import React from "react";

import headerPhoto from "@/assets/rafting.png";

const About = () => {
  return (
    <section className="w-full relative min-h-screen lg:h-[940px] overflow-hidden bg-mainColor">
      <div className="flex absolute w-11/12 items-center  inset-0 h-full mx-auto">
        <div className="w-1/2 text-white flex flex-col gap-y-10">
          <div className="flex flex-col text-2xl uppercase">
            <h4 className="font-medium">
              Konjic | Bosnia & Herzegovina | 2024
            </h4>
            <h4 className="font-light">10 June | 15 June 2024</h4>
          </div>
          <div className="text-6xl font-bold uppercase">
            <h1>Experience the thrill of water!</h1>
          </div>
          <div className="text-xl">
            <p className="font-light">
              We look forward to seeing you in{" "}
              <span className="font-bold">Konjic, BiH </span>
              for the WRF Senior European Rafting Championship
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end w-full h-full">
        <Image
          className="h-auto md:w-[43rem] lg:w-[53rem]"
          src={headerPhoto}
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
