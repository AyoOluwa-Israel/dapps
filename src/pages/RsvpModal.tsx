import ModalWithoutClose from "@/components/ModalWithoutClose";
import { IoCloseCircleOutline } from "react-icons/io5";
import Logo from "@/assets/images/logo2.png";

interface ModalProps {
  handleModal: (value: number) => void;
}

const RsvpModal: React.FC<ModalProps> = ({ handleModal }) => {
  return (
    <ModalWithoutClose>
      <div className="w-[450px] text-center">
        <div className="flex items-center justify-between">
          <p></p>

          <IoCloseCircleOutline className="text-3xl cursor-pointer" onClick={() => handleModal(1)} />
        </div>

        <div className="my-[2em] space-y-6">
          <img src={Logo} alt="Logo" className="w-[150px] mx-auto" />

          <p className=" w-[80%] mx-auto ">Congratulations, your attendance is confirmed.</p>

          <p className="font-bold cursor-pointer">download your receipt.</p>
        </div>
      </div>
    </ModalWithoutClose>
  );
};

export default RsvpModal;
