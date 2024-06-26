import { FC } from "react";
import { navbarList, navbarList2 } from "@/data/nav/nav";
import Link from "next/link";
import { motion } from "framer-motion";
import * as animations from "@/animations/animations";
import Image from "next/image";
import { useLocale } from "next-intl";

interface NavMenuProps {
  selectedLink: {
    isActive: boolean;
    index: number;
  };
  setSelectedLink: (value: { isActive: boolean; index: number }) => void;
  setIsActive: (value: boolean) => void;
}

const NavMenu: FC<NavMenuProps> = ({
  setIsActive,
  selectedLink,
  setSelectedLink,
}) => {
  const locale = useLocale();

  const getChar = (title: string) => {
    return title.split("").map((char, index) => (
      <motion.span
        custom={[index * 0.01, (title.length - index) * 0.01]}
        variants={animations.translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={index + char}
        className="relative"
      >
        {char}
      </motion.span>
    ));
  };

  const navlist = navbarList2(locale);

  return (
    <motion.div
      className="absolute z-20 overflow-hidden w-full bg-white"
      variants={animations.height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="uppercase font-medium px-8 py-2">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex flex-col xl:flex-row flex-wrap gap-8 w-1/2">
            {navlist.map(({ name, href }, i) => {
              return (
                <Link
                  onClick={() => setIsActive(false)}
                  onMouseOver={() =>
                    setSelectedLink({ isActive: true, index: i })
                  }
                  onMouseLeave={() =>
                    setSelectedLink({ isActive: false, index: i })
                  }
                  href={`/${locale}/${href}`}
                  key={i}
                  className=""
                >
                  <motion.p
                    className="flex text-4xl font-thin"
                    variants={animations.blur}
                    initial="inital"
                    animate={
                      selectedLink.isActive && selectedLink.index !== i
                        ? "open"
                        : "closed"
                    }
                  >
                    {getChar(name)}
                  </motion.p>
                </Link>
              );
            })}
          </div>
          <motion.div
            className="w-[40rem] h-[20rem] relative rounded-md hidden xl:block"
            variants={animations.opacity}
            initial="inital"
            animate={
              selectedLink.index === 0
                ? "open"
                : selectedLink.isActive
                ? "open"
                : "closed"
            }
          >
            <Image
              src={navbarList[selectedLink.index].image}
              alt="Nav image"
              fill={true}
              className="rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavMenu;
