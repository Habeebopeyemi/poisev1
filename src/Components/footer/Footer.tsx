import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import {
  FaInstagramSquare,
  FaWhatsappSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer: React.FC = () => {
  let year = new Date().getFullYear();
  return (
    <div className="w-full bg-button p-3" id="contact">
      <div className="w-[50%] text-center mx-auto mb-3">
        <h6 className="text-[2.5rem] font-bold">POISE OA</h6>
        <p className="mb-1">BY OLATUNDE AINA</p>
        <p className="flex justify-center text-white">
          <span className="mx-1 text-[1.7rem]">
            <a
              href="https://api.whatsapp.com/send?phone=%2B2348134863130&data=AWDDf5Koqyhq8N84q1xVGsyGLRemGUVSYr3kmfDGJPbU6p0AXoZNMt5vBt0SOq2MofL3JDpah5HmJb2hQgq5eRe3YYPajwB6QHo-xmTEX9QGBN0xymnTzAAUKG2jlvr0-bzg3UJTz4-aWuJnHs2X_ErVNG7wCt5hTY4cEu0SRwa35zTRgYtjEZpEQ0e-oNkjuNIhrJMytQpjbjjuma0ZsfxiB0MEZUq1-LXDTsOF6A5ZVTcAxDE20vksG7YVY0BGyW5QN35-HP0ESeutPPAr5RpMgNwQksWtv30J2jfjd6VOb_jt8xs&source=FB_Page&app=facebook&entry_point=page_cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare />
            </a>
          </span>
          <span className="mx-1 text-[1.7rem]">
            <a
              href="https://twitter.com/poise_OA?t=tmCrzzVxPMt9rp279q-I_Q&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
          </span>
          <span className="mx-1 text-[1.7rem]">
            <a
              href="https://instagram.com/poise.ng?igshid=MmJiY2I4NDBkZg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </a>
          </span>
          <span className="mx-1 text-[1.7rem]">
            <a
              href="https://www.linkedin.com/company/poise-ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
          <span className="mx-1 text-[1.7rem]">
            <a
              href="https://www.facebook.com/thatpoise01?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </span>
        </p>
      </div>
      <div className="text-md flex justify-between">
        <p>&copy; {String(year)} PoiseOA | Nigeria</p>
        <Link to="/signin" className="text-white">
          <button className="text-slate-500 hover:text-black">Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
