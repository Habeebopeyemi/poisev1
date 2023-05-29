import React from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import Details from "./Details";
import { useGetProductQuery } from "redux/actions/services";
import { product_details } from "data";

const ProductCard: React.FC = () => {
  let { id } = useParams();
  const { data, isLoading } = useGetProductQuery(id);
  console.log(id);
  let product = product_details[Number(id)];

  return (
    <>
      <section className="w-full h-[100vh] bg-gallery p-4">
        {isLoading ? (
          <Spin />
        ) : (
          <Details
            id={data.product._id}
            name={data.product.name}
            price={data.product.price}
            description={data.product.description}
            src={data.product.image}
            details={data.product.details}
          />
        )}
      </section>
    </>
  );
};

export default ProductCard;
