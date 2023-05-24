import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import type { IDetails } from "interface/interface";
import EditProduct from "Components/editproduct/EditProduct";

const Details: React.FC<IDetails> = ({
  id,
  name,
  price,
  description,
  details,
  src,
}) => {
  const token = sessionStorage.getItem("token")
  return (
    <div className="max-w-[600px] border-[2px] border-slate-500 mx-auto rounded-md md:max-w-[95%] lg:max-w-[970px]">
      <p className="m-2 flex justify-between">
        <span></span>
        <Link to="/">
          <FaTimes className="text-xl" />
        </Link>
      </p>
      <div className="w-full p-3 md:flex justify-between">
        <div className="basis-[50%]">
          <div className="w-full h-[80%] mb-3">
            <img src={src} alt="" className="w-full h-full" />
          </div>
          <div className="w-[70%] flex justify-between">
            <div className="basis-[80%]">
              <a
                href="http://wa.me/+2348088880886"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full font-bold bg-button p-2 rounded-md hover:bg-button_hover hover:text- md:p-3">
                  Continue on whatsapp
                </button>
              </a>
            </div>
            <span className="font-bold text-xl p-2">#{id}</span>
          </div>
        </div>
        <div className="basis-[45%]">
          <div className="flex justify-between my-3">
            <h2 className=" text-xl font-[500]">{name}</h2>
            <span className="font-bold text-xl">${price}</span>
          </div>
          <p className="text-sm text-descr leading-6">{description}</p>
          <h3 className="text-lg mt-3 font-[500]">Product Details</h3>
          <p className="text-sm text-descr leading-6">{details}</p>
          <h4 className=" font-[500] mt-3 mb-2">Shop with us.</h4>
          <p className="text-sm text-descr">
            To shop for this item, please send us a message on{" "}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Instagram
            </a>{" "}
            or{" "}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Twitter
            </a>{" "}
            with the product number.
          </p>
        </div>
      </div>
      {token?(<EditProduct/>):null}
    </div>
  );
};

export default Details;