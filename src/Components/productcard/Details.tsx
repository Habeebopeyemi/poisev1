import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { message, Popconfirm, QRCode } from "antd";
import { FaTimes } from "react-icons/fa";
import type { IDetails } from "interface/interface";
import EditProduct from "Components/editproduct/EditProduct";
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
  const location = useLocation();
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
    console.log(location);

    message.error("Thanks for reconsidering");
  };
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
          <div className="w-[100%] flex justify-between">
            <div className="basis-[80%]">
              <a
                href="http://wa.me/+2348088880886"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full font-bold bg-button p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3">
                  Continue on whatsapp
                </button>
              </a>
            </div>
            <span className="font-bold text-sm p-2">#{id}</span>
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
            <div className="w-[75%] mx-auto p-3 rounded-md border-[1px] border-button md:w-[50%] lg:w-[70%] lg:mt-[7rem]">
              <QRCode
                errorLevel="H"
                value={window.location.href}
                icon="https://res.cloudinary.com/devhabeeb/image/upload/v1685395164/Copy_of_Poise_Logo-removebg-preview_1_aroq4m.svg"
                size={300}
                iconSize={100}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Details;
