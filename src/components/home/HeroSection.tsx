import Image from "next/image";

//lang
import { useTranslations } from "next-intl";

//images
import headerPhoto from "@/assets/header1.jpg";

const HeroSection = () => {
  const t = useTranslations("Header");
  return (
    <section className="w-full relative h-screen md:h-[700px]">
      <div className="flex absolute px-4 md:px-28 items-center inset-0 h-full mx-auto">
        <div
          data-scroll
          data-scroll-speed="0.2"
          className="w-full md:w-1/2 text-center md:text-left text-white flex flex-col gap-y-8"
        >
          <div className="font-bold">
            <span className="block mb-4 text-base md:text-xl text-thirdCol font-semibold uppercase">
              {t("event")}
              <span className="text-sm lg:text-base font-normal block normal-case">
                {" "}
                {t("date")}
              </span>
            </span>
            <h3 className="font-bold text-white text-3xl md:text-5xl uppercase">
              {t("header")}
            </h3>
          </div>
          <div className="text-lg text-justify">
            <p className="font-light">
              {t("desc1")} <span className="font-bold">{t("descbold")} </span>
              {t("desc2")}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <Image
          className="h-full w-full object-cover"
          src={headerPhoto}
          alt="rafting_photo"
        />
      </div>
    </section>
  );
};

export default HeroSection;
