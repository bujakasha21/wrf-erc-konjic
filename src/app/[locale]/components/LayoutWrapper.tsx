"use client";
import { FC, useEffect } from "react";
import Footer from "./Footer";
import Nav from "./nav/Nav";

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
      <div className="h-screen" />
      <Footer />
    </>
  );
};

export default LayoutWrapper;
