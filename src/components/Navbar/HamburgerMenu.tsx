"use client";
import { useEffect, useRef, useState } from "react";
import SignUp_SignIn_Button from "./SignUp_SignIn_Button";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import ToggleMoodButton from "./ToggleMoodButton";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="block md:hidden" ref={menuRef}>
      <button onClick={toggleMenu} className="btn block md:hidden">
        {isOpen ? (
          <HamburgerMenuIcon prop="M6 18L18 6M6 6l12 12" />
        ) : (
          <HamburgerMenuIcon prop="M4 6h16M4 12h16m-7 6h7" />
        )}
      </button>

      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 rounded-lg bg-primary flex items-center w-auto absolute top-[75px] right-0 shadow-md`}
      >
        <ul className="flex flex-col space-y-2">
          <li>
            <SignUp_SignIn_Button
              text="Sign up"
              classes="btn-primary border-none w-full rounded-lg"
            />
          </li>
          <li>
            <SignUp_SignIn_Button
              text="Sign in"
              classes="btn-primary w-full rounded-lg"
            />
          </li>
          <li className="flex items-center justify-center">
            <ToggleMoodButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
