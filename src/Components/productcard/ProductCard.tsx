import React from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import Details from "./Details";
import { useGetProductQuery } from "redux/actions/services";
import Footer from "Components/footer/Footer";

const ProductCard: React.FC = () => {
  let { id } = useParams();
  const { data, isLoading } = useGetProductQuery(id);
  const token = sessionStorage.getItem("token");

  return (
    <>
      <section className={token ? "w-full" : "w-full"}>
        {isLoading ? (
          <div className="w-[20%] align-center mx-auto my-[50vh] text-center">
            <Spin />
            <p>Loading...</p>
          </div>
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
        <div className="w-full mt-10">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ProductCard;
