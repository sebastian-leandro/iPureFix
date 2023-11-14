import {
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";
import Link from "next/link";
import { Contact } from "@/modules";

const Footer = () => {
  return (
    <footer
      className="w-full h-auto relative px-8 overflow-hidden"
      id="contact"
    >
      <div className="w-full h-auto flex justify-center py-16">
        <Contact />
      </div>
      <div className="flex gap-x-10 py-8 md:gap-y-0 gap-y-8 items-end h-full md:flex-row flex-col  justify-center  w-full">
        <div className="flex gap-x-4 md:justify-start justify-center w-full">
          <Link href={"https://instagram.com/iPureFix"} className="text-3xl text-white">
            <BiLogoInstagram />
          </Link>
        </div>

        <div className="flex justify-center md:justify-end w-full">
          <strong>Designed by Poderify | All rights reserved.</strong>
        </div>
      </div>
      <div className="absolute top-0 w-full h-[1.15px] border-gradient"></div>
      <div className="absolute bottom-0 w-full h-[1.15px] border-gradient"></div>
    </footer>
  );
};

export default Footer;
