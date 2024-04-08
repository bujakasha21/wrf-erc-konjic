import about1 from "@/assets/about/1.jpg";
import about2 from "@/assets/about/2.jpg";
import about3 from "@/assets/about/3.jpg";
import { StaticImageData } from "next/image";

export type AboutImages = {
  [key: `about${number}`]: StaticImageData;
};
export const useAboutImages = () => {
  const aboutImages: AboutImages = {
    about1,
    about2,
    about3,
  };

  const getImageUrl = (itemId: number) => {
    const key = `about${itemId + 1}` as keyof typeof aboutImages;
    const src = key in aboutImages ? aboutImages[key].src : null;

    return src;
  };

  return {
    getImageUrl,
    aboutImages,
  };
};
