import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  colorType?: "light" | "dark";
  px?: string;
  py?: string;
}

const Button: FC<ButtonProps> = ({ onClick, children, py, px }) => {
  return (
    <button
      onClick={onClick}

      className={`className="relative block ${px ? px : "px-[4rem]"} ${
        py ? py : "py-[5.3rem]"
      } rounded-full bg-thirdCol font-bold text-white "

    `}
    >
      <span className={`uppercase`}>{children}</span>
    </button>
  );
};

export default Button;
