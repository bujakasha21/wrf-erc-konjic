import Image from "next/image";
import coverImg from "@/assets/Kopija datoteke Foto uz logotip Welcome to Konjic.jpg";

//lang
import { useTranslations } from "next-intl";

//images
import Link from "next/link";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="flex flex-col absolute items-center justify-center h-full w-full mt-14 gap-y-10">
        <h1 className="text-5xl font-bold text-textColor">Contact Form</h1>
        <div className="w-4/5 block rounded-lg bg-[hsla(199,88%,67%,0.3)] px-6 py-12 h-fit backdrop-blur-[30px]">
          <ContactForm />
        </div>
      </div>
      <div className="w-full h-[600px] overflow-hidden">
        <Image src={coverImg} alt="coverImg" />
      </div>
    </section>
  );
};

export default Page;
