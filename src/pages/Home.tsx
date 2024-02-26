import PrimaryButton from "@/components/PrimaryButton";
import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[100vh] w-[100vw] md:bg-heroDesktopBg bg-mobile1 bg-no-repeat bg-cover text-white text-center">
      <div className="w-[80%] h-[100%] flex flex-col justify-center items-center md:space-y-4 space-y-6 mx-auto">
        <img src={Logo} alt="Logo" className="md:w-[40%] w-[80%]" />

        <p className="font-semibold md:text-xl text-lg">At Azure Grill, Lagos Marriott.</p>

        <p className="md:pt-[4em] pt-[2em] leading-8">An exclusive invitation to a private dinner & jubilee fete.</p>

        <Link to="/rsvp">
          <div className="w-[160px]">
            <PrimaryButton text="RSVP" type="button" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
