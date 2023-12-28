import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { message, Popconfirm, QRCode } from "antd";
import { FaTimes } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import type { IDetails } from "interface/interface";
import EditProduct from "Components/editproduct/EditProduct";
import Footer from "Components/footer/Footer";

import { usePostDeleteProductMutation } from "redux/actions/services";
export interface IProduct {
  data: {
    title: string;
    description: string;
    price: string;
    details: string;
    image: string;
  };
  url: string;
}
const Details: React.FC<IDetails> = ({
  id,
  name,
  price,
  description,
  details,
  src,
}) => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [postDeleteMutation] = usePostDeleteProductMutation();
  const confirm = () => {
    postDeleteMutation(id)
      .unwrap()
      .then((res) => {
        message.success(res.message);
        navigate(-1);
      })
      .catch((err) => {
        message.error(err.status);
      });
  };
  const cancel = () => {
    message.error("Thanks for reconsidering");
  };
  return (
    <div>
      <div className="max-w-[400px] sm:max-w-[600px] border-[2px] border-slate-500 mx-auto mt-20 mb-[2.95rem] sm:mb-[5.75rem] md:mb-[14.8rem] rounded-md md:max-w-[95%] lg:max-w-[970px] bg-gallery">
        <p className="m-2 flex justify-between">
          <span></span>
          <Link to="/">
            <FaTimes className="text-xl" />
          </Link>
        </p>
        <div className="w-full p-5 md:flex justify-between">
          <div className="basis-[50%]">
            <div className="w-full h-[200px] mb-3">
              <img src={src} alt="" className="w-full h-full" />
            </div>
            <div className="w-[100%] sm:flex md:block justify-between">
              <div className="w-full sm:basis-[50%] basis-[80%] sm:flex md:block justify-between">
                <a
                  href="https://api.whatsapp.com/send?phone=%2B2348134863130&data=AWDDf5Koqyhq8N84q1xVGsyGLRemGUVSYr3kmfDGJPbU6p0AXoZNMt5vBt0SOq2MofL3JDpah5HmJb2hQgq5eRe3YYPajwB6QHo-xmTEX9QGBN0xymnTzAAUKG2jlvr0-bzg3UJTz4-aWuJnHs2X_ErVNG7wCt5hTY4cEu0SRwa35zTRgYtjEZpEQ0e-oNkjuNIhrJMytQpjbjjuma0ZsfxiB0MEZUq1-LXDTsOF6A5ZVTcAxDE20vksG7YVY0BGyW5QN35-HP0ESeutPPAr5RpMgNwQksWtv30J2jfjd6VOb_jt8xs&source=FB_Page&app=facebook&entry_point=page_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full flex justify-center font-bold bg-black text-button my-2 p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3">
                    <span>Continue on</span>{" "}
                    <BsWhatsapp className="mt-[0.25rem] ml-2" />
                  </button>
                </a>
                <a
                  href="https://ig.me/m/Poise.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full flex justify-center font-bold bg-black text-button my-2 p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3">
                    <span>Continue on</span>{" "}
                    <BsInstagram className="mt-[0.25rem] ml-2" />
                  </button>
                </a>
              </div>
              <span className="font-bold text-sm my-2 p-2">ID:{id}</span>
            </div>
          </div>
          <div className="basis-[40%]">
            <div className="flex justify-between my-3">
              <h2 className=" text-xl font-[500]">{name}</h2>
              <span className="font-bold text-xl">&#8358;{price}</span>
            </div>
            <p className="text-sm text-descr leading-6">{description}</p>
            <h3 className="text-lg mt-3 font-[500]">Product Details</h3>
            <p className="text-sm text-descr leading-6">{details}</p>
            <h4 className=" font-[500] mt-3 mb-2">Shop with us.</h4>
            <p className="text-sm text-descr">
              To shop for this item, please send us a message on{" "}
              <a
                href="https://instagram.com/poise.ng?igshid=MmJiY2I4NDBkZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Instagram
              </a>{" "}
              or{" "}
              <a
                href="https://twitter.com/poise_OA?t=tmCrzzVxPMt9rp279q-I_Q&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Twitter
              </a>{" "}
              with the product number.
            </p>
            {token ? (
              <div className="my-3">
                <Popconfirm
                  title="Delete"
                  description="Are you sure about deleting this product?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                  okButtonProps={{ style: { backgroundColor: "blue" } }}
                >
                  <button className="w-full font-bold bg-button p-2 rounded-md hover:bg-red-500 hover:text-white md:p-3">
                    Delete
                  </button>
                </Popconfirm>
              </div>
            ) : null}
          </div>
        </div>
        {token ? (
          <div className="lg:flex">
            <EditProduct />
            <div className="w-full mx-auto p-3 bg-gallery">
              <div className="w-[95%] sm:w-[58%] mx-auto p-3 rounded-md border-[1px] border-button md:w-[50%] lg:w-[70%] lg:mt-[7rem]">
                <QRCode
                  errorLevel="H"
                  // value={window.location.href}
                  value={`https://thisispoise.com`}
                  icon="https://res.cloudinary.com/devhabeeb/image/upload/v1685395164/Copy_of_Poise_Logo-removebg-preview_1_aroq4m.svg"
                  size={300}
                  iconSize={50}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
/**https://thisispoise.com/ */
