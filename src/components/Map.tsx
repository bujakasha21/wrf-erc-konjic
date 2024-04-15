import React from "react";

const Map = () => {
  return (
    <section className="w-full h-[400px] mt-8">
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23094.966645462824!2d17.962163699999998!3d43.6508557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f51251f89ada3%3A0x367c33eb042772b!2sKonjic!5e0!3m2!1sen!2sba!4v1712707609346!5m2!1sen!2sba"
          width="600"
          height="450"
          loading="lazy"
          className="w-full h-full rounded"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
