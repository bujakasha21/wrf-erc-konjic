import ContactForm from "@/components/ContactForm";
import ContactHeading from "@/components/ContactHeading";

const Page = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="w-full h-full">
          <ContactHeading />
        </div>
        <div className="w-full h-fit">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Page;
