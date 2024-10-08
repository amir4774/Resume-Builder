import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import SignUp_SignIn_Button from "./SignUp_SignIn_Button";
import ToggleMoodButton from "./ToggleMoodButton";
import SiteTitle from "../SiteTitle";

const Navbar = () => {
  return (
    <nav className="fixed bg-white w-full shadow-lg py-4 dark:bg-dark_bg">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="scale-125"
          />
          <SiteTitle />
        </div>

        <div className="items-center hidden space-x-8 md:flex">
          <SignUp_SignIn_Button text="Sign up" classes="btn-secondary" />
          <SignUp_SignIn_Button text="Sign in" classes="btn-primary" />
          <ToggleMoodButton />
        </div>

        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
