"use client";

import { useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0, // Corrected typo here
    height: 0,
  });

  const updateWindowDimensions = () => {
    const { innerWidth, innerHeight } = window;
    setWindowDimensions({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
