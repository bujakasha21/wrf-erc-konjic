"use client";

import { FC } from "react";

import * as animations from "@/animations/animations";
import { motion } from "framer-motion";

export interface NavStateProps {
  isActive: boolean;
  setIsActive?: (isActive: boolean) => void;
}

const NavMenuBackground: FC<NavStateProps> = ({ isActive }) => {
  return (
    <motion.div
      className="h-full w-full bg-mainColor opacity-50 absolute z-0"
      variants={animations.navBackgroundHeight}
      initial="initial"
      animate={isActive ? "open" : "closed"}
    />
  );
};

export default NavMenuBackground;
