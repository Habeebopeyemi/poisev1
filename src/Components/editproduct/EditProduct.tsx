import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostEditProductMutation } from "redux/actions/services";

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
const EditProduct = () => {
  return <div className="w-full">EditProduct</div>;
};

export default EditProduct;
