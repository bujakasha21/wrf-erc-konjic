import Link from "next/link";
import Button from "../utils/Buttons";
import OrganizationImageGrid from "./OrganizationImageGrid";
import { useLocale, useTranslations } from "next-intl";
import Title from "../utils/Title";
import Magnetic from "../utils/Magnetic";

const Organization = () => {
  const t = useTranslations("Organization");
  const locale = useLocale();
  return (
    <section className="py-14 md:py-24 w-full px-4 md:px-28 grid grid-cols-1 md:grid-cols-2 items-start gap-8 text-textColor">
      <div data-scroll data-scroll-speed="0.2">
        <div className="flex flex-col md:items-start text-left gap-y-2">
          <span className="text-xs md:text-sm text-thirdCol font-medium ">
            <span className="text-xs md:text-md font-semibold block uppercase text-left">
              {t("title")}
            </span>
          </span>
          <h3 className={`font-bold text-3xl xl:text-6xl uppercase text-left`}>
            {t("event")}
          </h3>
        </div>
        <p className="text-base font-bold my-5 text-justify">{t("desc1")}</p>
        <p className="text-base text-justify">{t("desc2")}</p>
        <div className="flex items-center justify-start text-white gap-x-8 mt-8">
          <Magnetic>
            {/* <MotionButton name="REZERVISI" onClick={() => console.log("first")} /> */}
            <Button py="py-[3rem]" px="px-[1.5rem] text-xs relative">
              <Link href="/" className="">
                {t("btn1")}
              </Link>
            </Button>
          </Magnetic>
          <Magnetic>
            {/* <MotionButton name="REZERVISI" onClick={() => console.log("first")} /> */}
            <Button
              py="py-[3rem]"
              px={`${
                locale === "en" ? "px-[2rem]" : "px-[1.5rem]"
              }  text-xs relative`}
            >
              <Link href="/" className="">
                {t("btn2")}
              </Link>
            </Button>
          </Magnetic>
        </div>
      </div>
      <OrganizationImageGrid />
    </section>
  );
};

export default Organization;
