import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { CgScrollH } from "react-icons/cg";
import { BsWhatsapp, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer: React.FC = () => {
  let year = new Date().getFullYear();
  return (
    <div className="w-full relative bg-black text-button p-3" id="contact">
      <div className="w-full mb-5">
        <div className="w-[50%] mx-auto mb-3 sm:basis-[50%] text-center">
          <h6 className="text-[14px] sm:text-xl font-bold lg:text-3xl">
            POISE BY OLATUNDE AINA
          </h6>
        </div>
        <div className="w-full sm:w-[70%] mx-auto sm:flex justify-between lg:w-[75%] gap-20">
          <div>
            <p className="w-[50%] sm:w-full flex my-2">
              <span className="mr-[0.2rem] basis-[3%] ">
                <AiOutlineHome className="text-[13px] sm:text-[1rem] mt-[0.25rem] mr-2" />
              </span>
              <span className="text-[13px] sm:text-[1rem]">Nigeria</span>
            </p>
            <p className="w-[50%] sm:w-full flex my-2">
              <span className="mr-[0.2rem] basis-[3%]">
                <AiOutlinePhone className="text-[13px] sm:text-[1rem] mt-[0.25rem] mr-2" />
              </span>
              <span className="text-[13px] sm:text-[1rem]">
                +234 813 486 3130
              </span>
            </p>
            <p className="w-[50%] sm:w-full flex my-2">
              <span className="mr-[0.2rem] basis-[3%]">
                <AiOutlineMail className="text-[13px] sm:text-[1rem] mt-[0.25rem] mr-2" />
              </span>
              <span className="text-[13px] sm:text-[1rem]">
                Thepoise.ng@gmail.com
              </span>
            </p>
            <p className="w-[50%] sm:w-full flex my-2">
              <span className="mr-[0.2rem] basis-[3%]">
                <AiOutlineClockCircle className="text-[13px] sm:text-[1rem] mt-[0.25rem] mr-2" />
              </span>
              <span className="text-[13px] sm:text-[1rem]">
                Mon - Fri / 9:00 AM - 5:00 PM
              </span>
            </p>
          </div>
          <p className="flex text-white my-auto">
            <span className="mx-2 text-[1.7rem]">
              <a
                href="https://api.whatsapp.com/send?phone=%2B2348134863130&data=AWDDf5Koqyhq8N84q1xVGsyGLRemGUVSYr3kmfDGJPbU6p0AXoZNMt5vBt0SOq2MofL3JDpah5HmJb2hQgq5eRe3YYPajwB6QHo-xmTEX9QGBN0xymnTzAAUKG2jlvr0-bzg3UJTz4-aWuJnHs2X_ErVNG7wCt5hTY4cEu0SRwa35zTRgYtjEZpEQ0e-oNkjuNIhrJMytQpjbjjuma0ZsfxiB0MEZUq1-LXDTsOF6A5ZVTcAxDE20vksG7YVY0BGyW5QN35-HP0ESeutPPAr5RpMgNwQksWtv30J2jfjd6VOb_jt8xs&source=FB_Page&app=facebook&entry_point=page_cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp className="text-lg sm:text-2xl md:text-3xl" />
              </a>
            </span>
            <span className="mx-2 text-[1.7rem]">
              <a
                href="https://twitter.com/poise_OA?t=tmCrzzVxPMt9rp279q-I_Q&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter className="text-lg sm:text-2xl md:text-3xl" />
              </a>
            </span>
            <span className="mx-2 text-[1.7rem]">
              <a
                href="https://instagram.com/poise.ng?igshid=MmJiY2I4NDBkZg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="text-lg sm:text-2xl md:text-3xl" />
              </a>
            </span>
            <span className="mx-2 text-[1.7rem]">
              <a
                href="https://www.linkedin.com/company/poise-ng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-lg sm:text-2xl md:text-3xl" />
              </a>
            </span>
            <span className="mx-2 text-[1.7rem]">
              <a
                href="https://www.facebook.com/thatpoise01?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="text-lg sm:text-2xl md:text-3xl" />
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="text-md text-white flex justify-between">
        <p>&copy;{String(year)} Poise by Olatunde Aina</p>
        <Link to="/signin" className="text-white">
          <button className="text-slate-500 hover:text-black">Admin</button>
        </Link>
      </div>
      <a
        href="#nav"
        className="absolute right-0 bottom-28 -rotate-90 flex gap-2 hover:underline"
      >
        <button>Scroll up</button>
        <CgScrollH className="mt-[6px]" />
      </a>
    </div>
  );
};

export default Footer;
