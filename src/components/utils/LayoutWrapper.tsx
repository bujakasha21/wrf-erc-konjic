"use client";
import { FC, useEffect } from "react";
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
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
