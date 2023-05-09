import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  let year = new Date().getFullYear();
  return (
    <div className="w-full bg-button p-3">
      <div className="w-[50%] text-center mx-auto mb-3">
        <h6 className="text-[2.5rem] font-bold">POISE OA</h6>
        <p className="mb-1">BY OLATUNDE AINA</p>
        <p className="flex justify-center text-white">
          <span className="mx-1 text-[1.7rem]">
            <FaWhatsappSquare />
          </span>
          <span className="mx-1 text-[1.7rem]">
            <BsTwitter />
          </span>
          <span className="mx-1 text-[1.7rem]">
            <FaInstagramSquare />
          </span>
        </p>
      </div>
      <div className="text-md">
        <p>&copy; {String(year)} PoiseOA | Nigeria</p>
      </div>
    </div>
  );
};

export default Footer;
