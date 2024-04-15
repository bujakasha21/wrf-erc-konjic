import { FC } from "react";
import { motion } from "framer-motion";
import * as animations from "@/animations/animations";

import { NavStateProps } from "./NavMenuBackground";
import AnimatedHamburgerButton from "./AnimatedBurgerButton";
import { useLocale } from "next-intl";

const BurgerButton: FC<NavStateProps> = ({ isActive, setIsActive }) => {
  const locale = useLocale();
  return (
    <div
      onClick={() => setIsActive && setIsActive(!isActive)}
      className="xl:absolute right-0  top-4 flex  xl:items-start  gap-4 xl:px-10 cursor-pointer text-white text-xl"
    >
      <AnimatedHamburgerButton isActive={isActive} setIsActive={setIsActive} />
      <div className="relative mt-1">
        <motion.p
          variants={animations.opacity}
          animate={isActive ? "closed" : "open"}
        >
          {locale === "en" ? "Menu" : "Meni"}
        </motion.p>
        <motion.p
          className="absolute inset-0 opacity-0"
          variants={animations.opacity}
          animate={!isActive ? "closed" : "open"}
        >
          {locale === "en" ? "Close" : "Zatvori"}
        </motion.p>
      </div>
    </div>
  );
};

export default BurgerButton;
