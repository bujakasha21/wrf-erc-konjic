import Image from "next/image";
import coverImg from "@/assets/Kopija datoteke Foto uz logotip Welcome to Konjic.jpg";
import headerPhoto from "@/assets/rafting.png";

//lang
import { useTranslations } from "next-intl";

//images
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ContactHeading from "@/components/ContactHeading";

const Page = () => {
  return (
    <section className="w-full min-h-screen overflow-hidden py-10">
      <div className="flex flex-col items-center justify-center h-full w-full mt-14">
        <div className="">
          <ContactHeading />
        </div>
        <div className="w-4/5 block rounded-lg px-6 py-12 h-fit backdrop-blur-[20px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Page;
