"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import neretva from "@/assets/Kopija datoteke Neretva, rafting.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/sendingEmail", formData);
      setFormError("");
      setFormSuccess(true);
      // clear data from form
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setFormSuccess(false), 2000);
    } catch (err: any) {
      let errorMessage = "Error sending email";
      if (err.response) {
        // The request was made, but the server responded with an error
        errorMessage = err.response.data.message || err.response.statusText;
      } else if (err.request) {
        // The request was made, but no response was received
        errorMessage = "No response received";
      } else {
        errorMessage = err.message || "Unknown error";
      }

      console.error("Error submitting form:", errorMessage);

      setFormError(errorMessage);
      setFormSuccess(false);
    }
  };

  return (
    <div className="flex">
      <div className="h-full w-1/2 flex flex-col gap-y-10">
        <div className="w-full">
          <p className="text-textColor opacity-75 text-md md:text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio
            repellendus ab nobis, molestiae architecto eaque numquam
          </p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-md">
          <div className="w-full flex flex-col md:flex-row p-2 gap-4">
            <div className="w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                className="w-full border-b border-darkerCol bg-transparent py-1 px-3 text-base leading-8 text-lighterCol placeholder-lighterCol outline-none transition-colors duration-200 ease-in-out focus:border-lighterCol focus:bg-formCol focus:ring-1 focus:ring-lighterCol"
                placeholder="Name"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                className="w-full border-b border-darkerCol bg-transparent py-1 px-3 text-base leading-8 text-lighterCol placeholder-lighterCol outline-none transition-colors duration-200 ease-in-out focus:border-lighterCol focus:bg-formCol focus:ring-1 focus:ring-lighterCol"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mt-4 w-full p-2">
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                rows={5}
                className="peer h-32 w-full resize-none border border-darkerCol bg-transparent py-1 px-3 text-base leading-6 text-lighterCol placeholder-lighterCol outline-none transition-colors duration-200 ease-in-out focus:lighterCol focus:bg-formCol focus:ring-1 focus:ring-lighterCol"
                placeholder="Get in Touch..."
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="w-full p-2">
            <button
              type="submit"
              className="flex rounded border-0 bg-thirdCol py-2 md:py-a px-6 md:px-8 text-lg text-mainCol font-medium hover:text-mainCol hover:px-12 transition-all ease-in focus:outline-none"
            >
              Contact Me
            </button>
            {formError !== "" && (
              <p className="text-md text-left font-light pt-4 text-red-700 opacity-75">
                {formError}
              </p>
            )}
            {formSuccess && (
              <p className="text-md text-left font-light pt-4 text-lighterCol opacity-75">
                Email has been sent successfully
              </p>
            )}
          </div>
        </form>
      </div>
      {/* <div className="w-[500px] h-[100px]">
        <Image src={neretva} alt="neretva" />
      </div> */}
    </div>
  );
};
export default ContactForm;
