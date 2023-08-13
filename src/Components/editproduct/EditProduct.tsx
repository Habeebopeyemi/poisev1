import React, { ChangeEvent, FormEvent, useState } from "react";
import { Spin, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import {
  usePostEditProductMutation,
  usePostDeleteProductMutation,
} from "redux/actions/services";
import UploadImage from "Components/upload/UploadImage";

const EditProduct: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [file, setFile] = useState<string>("");
  const [payload, setPayload] = useState<Record<string, any>>({});

  const [postEditProductMutation, { isLoading }] = usePostEditProductMutation();
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPayload((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // console.log(payload);
    // console.log({ data: payload, id: id });
    postEditProductMutation({ data: payload, id: id })
      .unwrap()
      .then((res) => {
        message.success(res.message);
        navigate(-1);
      })
      .catch((err) => {
        message.error(err.status);
      });
  };
  return (
    <div className="w-full mx-auto p-3 bg-gallery">
      <div className="w-full max-w-[800px] mt-[2rem] mx-auto">
        <div className="w-[70%] mx-auto mb-5 text-center">
          <h2 className="font-bold text-[1.5rem]">Edit product details</h2>
          <p>kindly update the product details</p>
        </div>
        <form
          className="w-[80%] mx-auto p-3 rounded-md border-[1px] border-button"
          onSubmit={submitHandler}
        >
          <div className="w-full my-8 md:flex justify-between">
            <label htmlFor="email" className="inline-block w-[25%]">
              Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="enter title"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              minLength={4}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="w-full my-8 md:flex justify-between">
            <label htmlFor="password" className="inline-block w-[25%]">
              Description:
            </label>
            <input
              type="description"
              name="description"
              placeholder="enter description"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              minLength={5}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="w-full my-8 md:flex justify-between">
            <label htmlFor="password" className="inline-block w-[25%]">
              Price:
            </label>
            <input
              type="number"
              name="price"
              placeholder="inser price"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="w-full my-8 md:flex justify-between">
            <label htmlFor="password" className="inline-block w-[25%]">
              Details:
            </label>
            <textarea
              // type="text"
              name="details"
              placeholder="enter product details"
              className="block w-[90%] sm:inline-block sm:w-[58%] md:w-[78%] lg:w-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              minLength={5}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="w-full my-8 md:flex justify-between">
            <label htmlFor="password" className="inline-block w-[25%]">
              Image url:
            </label>
            <input
              type="text"
              name="image"
              placeholder="paste image url"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              minLength={5}
              required
              onChange={changeHandler}
            />
          </div>
          {file ? (
            <div className="w-full p-2 rounded-xl bg-white">
              <p className="w-full break-words text-xs">{file}</p>
            </div>
          ) : null}
          <div>
            <UploadImage setFile={setFile} />
          </div>
          <button className="w-full my-8 bg-button p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3">
            {isLoading ? <Spin size="large" /> : "update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
