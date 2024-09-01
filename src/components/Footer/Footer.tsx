import SiteTitle from "../SiteTitle";
import FooterLi from "./FooterLi";
import FooterMedia from "./FooterMedia";

const footerLi = [
  { title: "Terms & Policies", links: ["Terms of Service", "Privacy Policy"] },
  { title: "Company", links: ["Home", "About Us", "Contact Us"] },
  { title: "Contact", links: ["(+234) 8089466435", "agencycr@gmail.com"] },
];

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white p-10 pt-20 text-center lg:text-start">
      <div className="container divide-y">
        <ul className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-4 sm:grid-cols-2">
          <li className="space-y-4">
            <SiteTitle />
            <p>
              Create your resume in a minute, get your dream job in a blink.
            </p>
          </li>

          {footerLi.map((item) => (
            <FooterLi key={item.title} title={item.title} links={item.links} />
          ))}

          <FooterMedia />
        </ul>

        <div className="pt-10 text-center">
          <p>&copy; Copyright, FutureResume 2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
