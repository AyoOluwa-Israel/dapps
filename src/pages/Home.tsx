import PrimaryButton from "@/components/PrimaryButton";
import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-heroDesktopBg bg-no-repeat bg-cover text-white flex flex-col justify-center items-center space-y-4">
      <img src={Logo} alt="Logo" className="w-[40%]" />

      <p className="font-semibold text-xl">At Azure Grill, Lagos Marriott.</p>

      <p className="pt-[4em] leading-8">An exclusive invitation to a private dinner & jubilee fete.</p>

      <Link to="/rsvp">
        <div className="w-[160px]">
          <PrimaryButton text="RSVP" type="button" />
        </div>
      </Link>
    </div>
  );
};

export default Home;
