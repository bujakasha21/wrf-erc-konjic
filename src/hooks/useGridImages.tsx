import img1 from "@/assets/organization/image1.jpg";
import img2 from "@/assets/organization/image2.jpg";
import img3 from "@/assets/organization/image3.jpg";
import img4 from "@/assets/organization/image4.jpg";
import img5 from "@/assets/organization/image5.jpg";
import img6 from "@/assets/organization/image6.jpg";
import img7 from "@/assets/organization/image7.jpg";
import img8 from "@/assets/organization/image8.jpg";
import img9 from "@/assets/organization/image9.jpg";
import img10 from "@/assets/organization/image10.jpg";
import img11 from "@/assets/organization/image11.jpg";
import img12 from "@/assets/organization/image12.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export const gridImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export const generateSquares = () => {
  return gridImages.map((img, i) => (
    <motion.div
      key={i}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full relative"
    >
      <Image alt="ERP 2024 Konjic" src={img} fill className="object-cover" />
    </motion.div>
  ));
};
