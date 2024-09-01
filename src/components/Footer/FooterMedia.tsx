import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const mediaLinks = [
  { title: "Facebook", icon: <FaFacebook /> },
  { title: "Twitter", icon: <FaTwitter /> },
  { title: "Instagram", icon: <FaInstagram /> },
  { title: "Linkedin", icon: <FaLinkedin /> },
];

const FooterMedia = () => {
  return (
    <li className="mt-0 lg:-mt-14 col-auto sm:col-span-2">
      <ul className="flex justify-center items-center space-x-10 [&>*]:text-3xl lg:justify-start">
        {mediaLinks.map((media) => (
          <li key={media.title}>
            <Link href="#">{media.icon}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default FooterMedia;
