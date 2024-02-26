import { IButtonProps } from "@/types/componentInterface";
import React from "react";
import { ClipLoader } from "react-spinners";

const PrimaryButton: React.FC<IButtonProps> = ({ className, text, onClick, type, disabled, isLoading }) => {
  return (
    <button
      onClick={disabled ? () => "" : onClick}
      className={`h-[40px] w-[100%] rounded-lg text-sm flex items-center space-x-3 justify-center font-semibold  ${
        disabled
          ? "bg-slate-300 cursor-not-allowed  text-white border-[1px] border-gray-200"
          : "bg-white hover:bg-hoverGreen cursor-pointer text-black"
      }  transition-all duration-300 ${className}`}
      type={type}
    >
      <p> {text}</p>
      {isLoading ? <ClipLoader color="#fff" size="20" /> : null}
    </button>
  );
};

export default PrimaryButton;
