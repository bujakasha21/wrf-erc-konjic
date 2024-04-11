import Image from "next/image";
import React from "react";

import konjic from "@/assets/konjic.jpg";

const Konjic = () => {
  return (
    <section className="w-full h-screen lg:h-[600px] my-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between px-28 h-full gap-x-8">
        <Image height={450} width={550} src={konjic} alt="konjic" />
        <div className="flex flex-col text-right gap-y-4">
          <span className="uppercase text-thirdCol text-xs md:text-xl font-semibold block">
            Grad
          </span>
          <h3 className="font-bold text-titleCol text-5xl uppercase">Konjic</h3>
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
      </div>
    </section>
  );
};

export default Konjic;
