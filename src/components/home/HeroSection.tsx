import Image from "next/image";

//lang
import { useTranslations } from "next-intl";

//images
import headerPhoto from "@/assets/rafting3.png";

const HeroSection = () => {
  const t = useTranslations("Header");
  return (
  <section className="w-full relative min-h-screen  overflow-hidden bg-mainColGradient">
      <div className="flex absolute w-11/12 md:w-5/6 items-center inset-0 h-full mx-auto">
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="w-full md:w-1/2 text-center md:text-left text-white flex flex-col gap-y-10"
        >
          <div className="flex flex-col text-2xl uppercase"></div>
          <div className="text-6xl font-bold uppercase">
            <span className="block mb-4 text-xs md:text-sm text-thirdCol font-medium">
              {t("event")}
              <span className="text-xs block"> 10 June - 15 June</span>
            </span>
            <h3 className="font-bold text-white text-7xl">{t("header")}</h3>
          </div>
          <div className="text-xl">
            <p className="font-light">
              {t("desc1")} <span className="font-bold">{t("descbold")} </span>
              {t("desc2")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Image
          className="h-auto w-full"
          src={headerPhoto}
          alt="rafting_photo"
        />
      </div>
    </section>
);
};

export default HeroSection;
