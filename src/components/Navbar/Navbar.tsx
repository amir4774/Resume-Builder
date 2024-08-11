import Image from "next/image";
import { LuSunMedium } from "react-icons/lu";
import HamburgerMenu from "./HamburgerMenu";
import SignUp_SignIn_Button from "./SignUp_SignIn_Button";

const Navbar = () => {
  return (
    <nav className="fixed w-full shadow-lg flex justify-between items-center py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="scale-125"
          />
          <h1 className="text-2xl text-primary font-bold mb-2 ml-[-5px]">
            FutureResume
          </h1>
        </div>

        <div className="items-center hidden space-x-8 md:flex">
          <SignUp_SignIn_Button text="Sign up" classes="btn-secondary" />
          <SignUp_SignIn_Button text="Sign in" classes="btn-primary" />
          <button className="btn hover:bg-gray-300">
            <LuSunMedium className="size-7 m-1" />
          </button>
        </div>

        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
