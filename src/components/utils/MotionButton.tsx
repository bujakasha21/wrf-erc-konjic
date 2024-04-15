"use client";
import React, { type FC } from "react";
import { motion } from "framer-motion";

interface MotionButtonProps {
  name: string;
  onClick: () => void;
}

const MotionButton: FC<MotionButtonProps> = ({ onClick, name }) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => {}}
      className="relative block px-[4rem] py-[5.3rem] rounded-full bg-thirdCol font-bold text-white "
      //   style={{ left: buttonX, rotate: buttonRotate }}
    >
      {name}
    </button>
  );
};

export default MotionButton;
