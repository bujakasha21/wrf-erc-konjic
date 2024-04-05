"use client";
import { useEffect, useState } from "react";

import WhiteLogo from "@/assets/logo-white.png";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  // useEffect(() => {
  //   /* Function that will close services on scroll or page change, and change opacity of navibation bar if scrolled from top */
  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     const threshold = 100;

  //     if (position > threshold) {
  //       setScrolledFromTop(true);
  //       setOpenServices(false);
  //     } else {
  //       setScrolledFromTop(false);
  //     }
  //   };

  //   const handleRouteChange = () => {
  //     setOpenServices(false);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events, setOpenServices]);

  return (
    <nav
      className={`fixed  ${
        scrolledFromTop ? "bg-gray-50/90" : "bg-mainColor"
      } w-full py-1 flex justify-between items-center shadow-md transition-all ease-linear md:px-[6rem] z-10`}
    >
      <div
        className={`w-full ${
          scrolledFromTop ? "text-secCol" : "text-white"
        } flex items-center justify-between`}
      >
        <Image
          className={`w-[10rem] ${scrolledFromTop ? "hidden" : ""}`}
          src={WhiteLogo}
          alt="white-logo"
        />
        <Image
          className={`w-[10rem] ${scrolledFromTop ? "flex" : "hidden"}`}
          src={Logo}
          alt="logo"
        />
        <div className="flex items-center gap-x-10 uppercase font-medium">
          <span>home</span>
          <span>home</span>
          <span>home</span>
          <span>home</span>
          <span>home</span>
          <span>home</span>
          {/* <span className="flex">
            {locales?.map((l) => (
              <div key={l} className="uppercase px-1">
                <Link href={"/"} locale={l}>
                  {l}
                </Link>
              </div>
            ))}
          </span> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
