import Image from "next/image";

//lang
import { useTranslations } from "next-intl";

//images
import headerPhoto from "@/assets/rafting3.png";

const HeroSection = () => {
  const t = useTranslations("Header");
  return (
    <section className="w-full relative min-h-screen lg:h-[940px] overflow-hidden bg-mainColGradient">
      <div className="flex absolute px-4 md:px-28 items-center inset-0 h-full mx-auto">

        <div
          data-scroll
          data-scroll-speed="0.2"
          className="w-full md:w-1/2 text-center md:text-left text-white flex flex-col gap-y-8"
        >
          <div className="text-6xl font-bold uppercase">
            <span className="block mb-4 text-xs md:text-xl text-thirdCol font-medium">
              {t("event")}
              <span className="text-xs md:text-sm block"> {t("date")}</span>
            </span>
            <h3 className="font-bold text-white text-6xl">{t("header")}</h3>
          </div>
          <div className="text-lg">
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
