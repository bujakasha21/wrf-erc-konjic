import Image from "next/image";
import React from "react";

import neretva from "@/assets/neretva.jpg";

const Nerertva = () => {
  return (
    <section className="w-full h-screen lg:h-[600px] my-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between px-28 h-full gap-x-8">
        <div className="flex flex-col text-left gap-y-4">
          <span className="uppercase text-thirdCol text-xs md:text-xl font-semibold block">
            Rijeka
          </span>
          <h3 className="font-bold text-titleCol text-5xl uppercase">
            Neretva
          </h3>
          <p className="pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            quod officia aut ratione sed deleniti delectus consectetur, nihil ex
            numquam nulla porro dolores possimus magni veritatis consequuntur
            minima? Sed, soluta!Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Magnam quod officia aut ratione sed deleniti
            delectus consectetur, nihil ex numquam nulla porro dolores possimus
            magni veritatis consequuntur minima? Sed, soluta!
          </p>
        </div>
        <Image height={450} width={550} src={neretva} alt="konjic" />
      </div>
    </section>
  );
};

export default Nerertva;
