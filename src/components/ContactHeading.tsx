import React from "react";

const ContactHeading = () => {
  return (
    <div className="flex flex-col items-start justify-center h-[60vw] px-28">
      <span className="block mb-4 text-xs md:text-xl text-thirdCol font-medium uppercase">
        contact us
      </span>
      <h1 className="text-6xl font-bold uppercase text-secCol">
        Hey there, don&apos;t hesitate to reach out!
      </h1>
      <p className="lg:text-2xl py-10 text-secCol">
        Whether you have questions, exciting project ideas, or pesky technical
        hurdles, drop us a line. Our team is all ears and ready to help. We
        pride ourselves on being responsive, aiming to get back to you within
        just a few hours. Let&apos;s chat soon!
      </p>
    </div>
  );
};

export default ContactHeading;
