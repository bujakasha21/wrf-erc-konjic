import Image from "next/image";
import pics from "@/assets/3pics.png";

//lang
import { useLocale, useTranslations } from "next-intl";

//images
import Link from "next/link";

const Organization = () => {
  const locale = useLocale();
  const t = useTranslations("Organization");
  return (
    <section className="w-full lg:h-[800px] overflow-hidden">
      <div className="flex flex-col lg:flex-row w-11/12 py-20 gap-y-10 gap-x-4 lg:py-0 md:w-5/6 items-center justify-evenly md:justify-between inset-0 h-full mx-auto">
        <div className="w-full lg:w-2/3">
          <Image src={pics} alt="raft" />
        </div>
        <div className="w-full lg:w-1/3 text-center lg:text-right flex flex-col justify-end gap-y-8">
          <div className="flex flex-col text-3xl uppercase">
            <h3 className="font-bold text-secCol text-4xl">{t("org")}</h3>
          </div>
          <div className="flex flex-col gap-y-4">
            <h6 className="text-lg font-bold text-blue-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ullam in quas nesciunt pariatur accusantium neque mollitia dolor
              dolorem?
            </h6>
            <p className="text-md text-blue-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum
              nulla neque magni reprehenderit mollitia, atque perspiciatis amet
              vitae fugiat et asperiores sed iste saepe excepturi autem
              architecto vero delectus!
            </p>
            <div className="flex items-center justify-center text-white gap-x-8 lg:justify-end">
              <Link
                href={`/${locale}/contact`}
                className="bg-thirdCol rounded-full py-2 px-4"
              >
                <span className="uppercase font-bold text-sm">{t("btn1")}</span>
              </Link>
              <Link href="/" className="bg-thirdCol rounded-full py-2 px-4">
                <span className="uppercase font-bold text-sm">{t("btn2")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
