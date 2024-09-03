import Link from "next/link";
import { FooterLiPropsType } from "./Interfaces";

const FooterLi = ({ title, links }: FooterLiPropsType) => {
  return (
    <li>
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <ul className="mt-5 space-y-4">
        {links.map((link) => (
          <li key={link}>
            {title === "Contact" ? link : <Link href="#">{link}</Link>}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default FooterLi;
