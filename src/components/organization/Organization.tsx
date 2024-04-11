"use client";
import Link from "next/link";
import Button from "../utils/Buttons";
import OrganizationImageGrid from "./OrganizationImageGrid";
import { useTranslations } from "next-intl";
import Title from "../utils/Title";

const Organization = () => {
  const t = useTranslations("Organization");
  return (
    <section className="py-8 md:py-24 w-full px-4 md:px-28 grid grid-cols-1 md:grid-cols-2 items-start gap-8 text-textColor">
      <div data-scroll data-scroll-speed="0.2">
        <Title translation="Organization" />
        <p className="text-md my-5">{t("desc1")}</p>
        <p className="text-md">{t("desc2")}</p>
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
