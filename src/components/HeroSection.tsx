import Image from "next/image";

//lang
import { useTranslations } from "next-intl";

//images
import headerPhoto from "@/assets/rafting.png";

const HeroSection = () => {
  const t = useTranslations("Header");
  return (

    <section className="w-full relative min-h-screen lg:h-[940px] overflow-hidden bg-mainColor">
      <div className="flex absolute w-11/12 md:w-5/6 items-center inset-0 h-full mx-auto">
        <div className="w-full md:w-1/2 text-center md:text-left text-white flex flex-col gap-y-10">
          <div className="flex flex-col text-2xl uppercase">
            <h4 className="font-medium">{t("event")}</h4>
            <h4 className="font-light">10 June | 15 June 2024</h4>
          </div>
          <div className="text-6xl font-bold uppercase">
            <h1>{t("header")}</h1>
          </div>
          <div className="text-xl">
            <p className="font-light">
              {t("desc1")} <span className="font-bold">{t("descbold")} </span>
              {t("desc2")}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end w-full h-full relative">
        <Image
          className="h-auto md:w-[43rem] lg:w-[53rem]"
          src={headerPhoto}
          alt="rafting_photo"
        />
      </div>
      <div className="absolute bottom-0 w-full h-[50vh] z-20 bg-gradient-to-t from-white  to-transparent" />
    </section>
  );
};

export default HeroSection;
