import { HamburgerMenuIconTypes } from "./Interfaces";

const HamburgerMenuIcon = ({ prop }: HamburgerMenuIconTypes) => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="#FF5C00"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={prop}
      ></path>
    </svg>
  );
};

export default HamburgerMenuIcon;
