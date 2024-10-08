import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size: "primary" | "secondary";
  color: "blue" | "white" | "black";
}

function Button({ children, size, color }: Props) {
  const sizeStyles = size === "primary" 
    ? "w-12 lg:w-48 lg:h-8 h-12" 
    : "w-24 lg:w-24 h-8 lg:h-8";

  const variantColor = color === "blue"
    ? "bg-blue text-white"
    : color === "white"
    ? "bg-white text-black"
    : "bg-black text-white border border-gray-500"; 

  return (
    <button
      className={`font-bold text-xs rounded-full ${variantColor} ${sizeStyles} 
        block lg:flex items-center justify-center`}
    >
      {children}
    </button>
  );
}

export default Button;
