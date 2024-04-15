"use client";
import { FC, useEffect, useRef } from "react";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
