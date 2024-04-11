"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import neretva from "@/assets/Kopija datoteke Neretva, rafting.jpg";
import OrganizationImageGrid from "./organization/OrganizationImageGrid";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeTerms: false,
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
      setFormData({ name: "", email: "", message: "", agreeTerms: false });

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
    <div className="flex gap-x-10">
      <div className="h-full w-1/2 flex flex-col gap-y-10">
        <div className="w-full p-2">
          <h1 className="text-5xl font-bold text-secCol">Get in Touch</h1>
        </div>
        <form onSubmit={handleSubmit} className="rounded-md">
          <div className="w-full flex flex-col md:flex-row p-2 gap-4">
            <div className="w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                className="w-full border rounded-md bg-transparent py-1 px-3 text-base leading-8 text-lighterCol placeholder-lighterCol outline-none transition-colors duration-200 ease-in-out focus:border-lighterCol focus:bg-formCol focus:ring-1 focus:ring-lighterCol"
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
                className="w-full border rounded-md bg-transparent py-1 px-3 text-base leading-8 text-lighterCol placeholder-lighterCol outline-none transition-colors duration-200 ease-in-out focus:border-lighterCol focus:bg-formCol focus:ring-1 focus:ring-lighterCol"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                rows={5}
                className="peer h-32 w-full resize-none border rounded-md bg-transparent py-1 px-3 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:ring-1"
                placeholder="Get in Touch..."
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="flex p-2 gap-x-3">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              required
              checked={formData.agreeTerms}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  agreeTerms: e.target.checked,
                }))
              }
            />
            <label htmlFor="agreeTerms">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="w-full p-2">
            <button
              type="submit"
              className="flex rounded border-0 bg-thirdCol w-full justify-center py-2 text-lg text-secCol font-medium transition-all focus:outline-none"
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
      {/* left part */}
      <div className="w-1/2">
        <div className="mt-28 flex flex-col items-start justify-start text-left w-full">
          <h3 className="mb-5 uppercase font-bold text-thirdCol">
            Details about tournament
          </h3>
          <ul className="flex flex-col gap-y-4">
            <li className="font-semibold text-lg"></li>
            <li>
              Konjic, Neretva,
              <br /> 88400 East Sarajevo,
              <br /> Bosnia and Herzegovina
            </li>
            <li className="flex gap-2 group">
              Call us:
              <div>
                <a href="tel:0038765345241">00387612545789</a>
                <div className="h-[1px] w-[0rem] group-hover:w-[8rem] group-hover:bg-black duration-300 ease-linear"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
