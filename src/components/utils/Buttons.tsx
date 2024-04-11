import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  colorType?: "light" | "dark";
}

const Button: FC<ButtonProps> = ({ onClick, children, colorType = "dark" }) => {
  const bgCol =
    colorType === "dark" ? "bg-mainColGradient" : "bg-lightColGradient";
  const bgColBefore = colorType === "dark" ? "bg-mainColor" : "bg-thirdCol";

  return (
    <button
      onClick={onClick}
      className={`relative group px-8 h-14 ${bgCol}
    before:absolute 
    before:inset-0 
    before:bg-mainColor
    before:scale-x-0 
    before:origin-right
    before:transition
    before:duration-300
    hover:before:scale-x-100
    hover:before:origin-left
    `}
    >
      <span className={`relative uppercase text-base text-white`}>
        {children}
      </span>
    </button>
  );
};

export default Button;
