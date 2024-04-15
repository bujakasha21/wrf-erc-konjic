const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

export const navBackgroundHeight = {
  initial: {
    height: 0,
  },
  open: {
    height: "100vh",
    transition,
  },
  closed: {
    height: 0,
    transition,
  },
};

export const color = {
  initial: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
  },
  open: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transition: { ...transition, duration: 0 },
  },
  closed: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",

    transition: { ...transition, delay: 0.75 },
  },
};

export const translate = {
  initial: {
    y: "100%",
  },
  enter: (i: [number, number]) => ({
    y: 0,
    transition: { ...transition, delay: i[0] },
  }),
  exit: (i: [number, number]) => ({
    y: "100%",
    transition: { ...transition, delay: i[1], duration: 0.7 },
  }),
};

export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  open: {
    filter: "blur(2px)",
    transition: { duration: 0.3 },
    opacity: 0.7,
  },
  closed: {
    filter: "blur(0px)",
    transition: { duration: 0.3 },
    opacity: 1,
  },
};
