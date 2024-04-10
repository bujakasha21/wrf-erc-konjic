import Link from "next/link";
import Button from "../utils/Buttons";
import OrganizationImageGrid from "./OrganizationImageGrid";
import { useTranslations } from "next-intl";

const Organization = () => {
  const t = useTranslations("Organization");
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-start gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-thirdCol font-medium">
          Better every day
        </span>
        <h3 className="font-bold text-secCol text-6xl">{t("org")}</h3>
        <p className="text-md my-5">
          A large number of young and very young Indomita members have obtained
          excellent results in regional and national competitions. Over 30
          countries and a total of 400 of the best athletes from around the
          world will compete to the last paddle stroke on the rapids of the
          river Adda in the WRF Senior World Rafting Championships, the worlds
          number-one rafting event.
        </p>
        <p className="text-md">
          Athletes, enthusiasts, sports lovers and tourists will enliven the
          banks of the ADDA, the scene of a week of competitions and numerous
          initiatives run by the organising committee
        </p>
        <div className="flex items-center justify-start text-white gap-x-8 mt-8">
          <Button>
            <Link href="/">{t("btn1")}</Link>
          </Button>
          <Button>
            <Link href="/">{t("btn2")}</Link>
          </Button>
        </div>
      </div>
      <OrganizationImageGrid />
    </section>
  );
};

export default Organization;
