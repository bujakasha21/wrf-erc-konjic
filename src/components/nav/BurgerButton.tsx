import { FC } from "react";
import { motion } from "framer-motion";
import * as animations from "@/animations/animations";

import { NavStateProps } from "./NavMenuBackground";
import AnimatedHamburgerButton from "./AnimatedBurgerButton";
import { useLocale } from "next-intl";
import ChangeLanguage from "../utils/ChangeLanguage";

const BurgerButton: FC<NavStateProps> = ({ isActive, setIsActive }) => {
  const locale = useLocale();
  return (
    <>
      <div className="block md:hidden">
        <ChangeLanguage isActive={isActive} />
      </div>
      <div
        onClick={() => setIsActive && setIsActive(!isActive)}
        className="md:absolute right-0 top-8 flex md:items-start gap-4 md:px-10 px-0 cursor-pointer text-white text-xl"
      >
        <AnimatedHamburgerButton
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <div className="relative mt-1 text-sm md:text-base">
          <motion.p
            variants={animations.opacity}
            animate={isActive ? "closed" : "open"}
          >
            {locale === "en" ? "Menu" : "Meni"}
          </motion.p>
          <motion.p
            className="inset-0 opacity-0 text-sm md:text-base"
            variants={animations.opacity}
            animate={!isActive ? "closed" : "open"}
          >
            {locale === "en" ? "Close" : "Zatvori"}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default BurgerButton;
