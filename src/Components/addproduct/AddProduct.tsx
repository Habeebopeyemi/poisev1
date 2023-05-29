import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin, message } from "antd";
import { usePostNewProductMutation } from "redux/actions/services";
import UploadImage from "Components/upload/UploadImage";

const AddProduct = () => {
  const [file, setFile] = useState<string>("");
  const navigate = useNavigate();
  const [payload, setPayload] = useState<Record<string, any>>({});
  const [postNewProductMutation, { isLoading }] = usePostNewProductMutation();

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
    //    console.log(payload);
    postNewProductMutation(payload)
      .unwrap()
      .then((res) => {
        // console.log(res);
        message.success(res.message);
        navigate(-1);
      })
      .catch((err) => {
        message.error(err.data.message);
      });
  };
  return (
    <div className="w-full mx-auto p-3 bg-gallery">
      <div className="w-full max-w-[800px] mt-[2rem] mx-auto">
        <div className="w-[70%] mx-auto mb-5 text-center">
          <h2 className="font-bold text-[1.5rem]">
            Add new products for customers
          </h2>
          {/* <p>kindly update the product details</p> */}
        </div>
        <form
          className="w-[80%] mx-auto p-3 rounded-md border-[1px] border-button"
          onSubmit={submitHandler}
        >
          <div className="w-full my-8 flex justify-between">
            <label htmlFor="email" className="basis-[15%]">
              Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="enter title"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              minLength={5}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="w-full my-8 flex justify-between">
            <label htmlFor="password" className="basis-[15%]">
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
          <div className="w-full my-8 flex justify-between">
            <label htmlFor="password" className="basis-[15%]">
              Price:
            </label>
            <input
              type="number"
              name="price"
              minLength={5}
              placeholder="inser price"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              required
              onChange={changeHandler}
            />
          </div>
          <div className="w-full my-8 flex justify-between">
            <label htmlFor="password" className="basis-[15%]">
              Details:
            </label>
            <textarea
              // type="text"
              name="details"
              placeholder="enter product details"
              className="basis-[80%] bg-transparent text-center border-b-[1px] border-button focus:outline-none focus:bg-transparent"
              minLength={5}
              required
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="w-full my-8 flex justify-between">
            <label htmlFor="password" className="basis-[15%]">
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
          <button className="w-full my-8 bg-button p-2 rounded-md hover:bg-button_hover hover:text-white md:p-3 text-center">
            {isLoading ? <Spin /> : "Add product"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
