import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const ModalWithoutClose: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-[2px]  fixed top-0 bottom-0 left-0 h-[100vh] w-full flex justify-center items-center z-[9] ">
      <div className="bg-white text-[#292D32] rounded-[8px] p-6 md:w-auto w-[90%]">{children}</div>
    </div>
  );
};

export default ModalWithoutClose;
