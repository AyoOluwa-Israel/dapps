import ModalWithoutClose from "@/components/ModalWithoutClose";
import { IoCloseCircleOutline } from "react-icons/io5";
import Logo2 from "@/assets/images/logo2.png";
import Logo from "@/assets/images/logo.png";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  handleModal: (value: number) => void;
}

const RsvpModal: React.FC<ModalProps> = ({ handleModal }) => {
  const navigate = useNavigate()
  const handleDownloadClick = () => {
    const page = document.getElementById("page-to-download");

    if (page) {
      html2canvas(page, {
        allowTaint: true,
        useCORS: true,
      })
        .then((canvas) => {
          const imgUrl = canvas.toDataURL("image/jpeg");
          saveAs(imgUrl, "invite.jpg");
        })
        .catch((error) => {
          console.error("Error generating image: ", error);
        });
    } else {
      console.error("Page element not found");
    }
  };

  return (
    <ModalWithoutClose>
      <div className="overflow-y-scroll  md:max-h-[55vh] max-h-[52vh]">
        <div className="sm:w-[450px] w-[100%] text-center ">
          <div className="flex items-center justify-between">
            <p></p>

            <IoCloseCircleOutline className="text-3xl cursor-pointer" onClick={() => handleModal(1)} />
          </div>

          <div className="my-[2em] space-y-6">
            <img src={Logo2} alt="Logo" className="w-[150px] mx-auto" />

            <p className=" sm:w-[80%] w-[95%] mx-auto ">Congratulations, your attendance is confirmed.</p>

            <hr className="border-black my-3 w-[70%] mx-auto" />

            <p className="font-semibold">
              Glam Dress Code: <br />
              <span className="font-normal"> A touch of white.</span>
            </p>

            <hr className="border-black my-3 w-[70%] mx-auto" />

            <p className="text-xs pt-4">This Admits Only One.</p>

            <p className="font-bold cursor-pointer underline underline-offset-1" onClick={handleDownloadClick}>
              download your receipt.
            </p>
          </div>
        </div>
        <div
          className="rounded-3xl overflow-hidden text-center w-[300px] mx-auto border-[1px] border-black  "
          id="page-to-download"
        >
          <div className="bg-black h-[100px] flex items-center justify-center">
            <img src={Logo} alt="Logo" className="w-[150px] mx-auto" />
          </div>

          <div className="py-4">
            <p className="font-semibold">
              Date:
              <span className="font-normal"> 9th March, 2024.</span>
            </p>

            <p className="font-semibold">
              Time:
              <span className="font-normal"> 6:00 PM WAT.</span>
            </p>

            <hr className="border-black my-3 w-[70%] mx-auto" />

            <p className="font-semibold">
              Venue: <br />
              <span className="font-normal"> Azure Grill, Marriott, Lagos.</span>
            </p>

            <hr className="border-black my-3 w-[70%] mx-auto" />

            <p className="font-semibold">
              Glam Dress Code: <br />
              <span className="font-normal"> A touch of white.</span>
            </p>

            <p className="text-xs pt-6">This Admits Only One.</p>
          </div>
        </div>
      </div>
    </ModalWithoutClose>
  );
};

export default RsvpModal;
