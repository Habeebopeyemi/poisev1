import React from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import Details from "./Details";
import { useGetProductQuery } from "redux/actions/services";

const ProductCard: React.FC = () => {
  let { id } = useParams();
  const { data, isLoading } = useGetProductQuery(id);
  const token = sessionStorage.getItem("token")

  return (
    <>
      <section
        className={token ? "w-full bg-gallery p-4" : "w-full h-[100vh] bg-gallery p-4"}
      >
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
