"use client";
import { useEffect, useState } from "react";
// import WhiteLogo from "@/assets/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import * as animations from "@/animations/animations";

import NavMenu from "./NavMenu";
import NavMenuBackground from "./NavMenuBackground";
import BurgerButton from "./BurgerButton";

import Logo from "@/assets/logo.png";
import ChangeLanguage from "../utils/ChangeLanguage";

const Nav = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState<boolean>(false);
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

  return (
    <nav className={`fixed w-full z-[50]`}>
      <motion.div
        className="flex items-center justify-center uppercase"
        variants={animations.color}
        initial="initial"
        animate={isActive ? "open" : "closed"}
      >
        {/* Title */}
        <div className="absolute top-4 left-0 px-10">
          <h1>WRF Senior Europe Championship</h1>
        </div>
        {/* Logo */}
        <Link className="w-[7rem] h-[4em] relative mt-4" href="/">
          <Image fill={true} src={Logo} alt="Logo" className="w-full h-full" />
        </Link>
        <BurgerButton setIsActive={setIsActive} isActive={isActive} />
      </motion.div>
      <NavMenuBackground isActive={isActive} />
      <AnimatePresence mode="wait">
        {isActive && (
          <NavMenu
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
