import { FaFacebook } from "react-icons/fa";
import { Logopaint } from "./icon/Logopaint";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export function Footer() {
  return (
    <div className="bg-slate-200  p-14 mt-24">
      <div className=" mt-20 md:flex justify-between gap-5  px-">
        <div className="flex-1 md:block hidden">
          <p className="font-bold text-xl">About</p>
          <p className="my-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
        <div className="flex-1 flex flex-col mt-3 md:mt-0 md:items-center gap-2 ">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-1 gap-3">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="md:flex justify-between mt-11">
        <div>
          <Logopaint />
        </div>
        <div className="flex  gap-4 text-center pt-2">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
