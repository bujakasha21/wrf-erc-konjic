"use client";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import WhiteLogo from "@/assets/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import * as animations from "@/animations/animations";

import NavMenu from "./NavMenu";
import NavMenuBackground from "./NavMenuBackground";
import BurgerButton from "./BurgerButton";

import Logo from "@/assets/logo.png";
import BlueLogo from "@/assets/logo.png";
import ChangeLanguage from "../utils/ChangeLanguage";
import { useLocale } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Nav = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOnTop, setIsOnTop] = useState(true);
  const [selectedLink, setSelectedLink] = useState<{
    isActive: boolean;
    index: number;
  }>({
    isActive: false,
    index: 0,
  });

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const scrollPosition = window.scrollY;
  //     if (!navRef.current) return;
  //     const navOffsetTop = 150;

  //     if (scrollPosition >= navOffsetTop) {
  //       setIsOnTop(false);
  //     } else {
  //       setIsOnTop(true);
  //     }
  //   });
  // }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!navRef.current) return;
    const showNaw = gsap
      .fromTo(
        navRef.current,
        { top: "-200px", opacity: 0 },
        { top: "0px", opacity: 1, duration: 0.4 }
      )
      .progress(1);

    showNaw.play(-2);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const topStyle = navRef.current ? +navRef.current.style.top : 0;
        setIsOnTop(+topStyle > 0);

        self.direction === -1 ? showNaw.play() : showNaw.reverse();
      },
    });
  }, []);
  return (
    <nav
      ref={navRef}
      className={`nav fixed w-full z-[50] duration-300 ease-linear ${
        isOnTop ? "backdrop-blur-none" : "backdrop-blur-md"
      } `}
    >
      <motion.div
        className={`flex items-center justify-center gap-8 lg:justify-center uppercase px-4 `}
        variants={animations.color}
        initial="initial"
        animate={isActive ? "open" : "closed"}
      >
        {/* Title */}

        <div className="absolute top-7 left-0 px-4 md:px-10">
          <h1
            className={`text-xl font-bold hidden md:block ${
              !isActive ? "text-white" : "text-textColor"
            } `}
          >
            {locale === "en" ? (
              <span>
                Senior European
                <br /> Rafting Championship 2024
              </span>
            ) : (
              <span>
                Seniorsko Evropsko
                <br /> Rafting Prvenstvo 2024
              </span>
            )}
          </h1>
        </div>

        {/* Logo */}
        <Link
          className="w-[6rem] md:w-[7rem] h-[4rem] md:h-[6.5rem] relative mt-4 my-4"
          href="/"
        >
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={isActive ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
              >
                <Image
                  fill={true}
                  src={Logo}
                  alt="Logo"
                  className="w-full h-full px-3 md:px-0"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 1 }}
                animate={isActive ? { scale: 1.5 } : { scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
              >
                <Image
                  fill={true}
                  src={WhiteLogo}
                  alt="Logo"
                  className="w-full h-full px-3 md:px-0"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
        <div className="hidden md:block">
          <ChangeLanguage isActive={isActive} />
        </div>
        <BurgerButton setIsActive={setIsActive} isActive={isActive} />
      </motion.div>
      <NavMenuBackground isActive={isActive} />
      <AnimatePresence mode="wait">
        {isActive && (
          <NavMenu
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
