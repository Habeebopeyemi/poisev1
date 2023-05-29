import React from "react";
import Card from "Components/card/Card";
import { Spin } from "antd";
import { gallery } from "data";
import { useGetProductsQuery } from "redux/actions/services";
import type { IProduct } from "interface/interface";
const Gallery: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery("products");
  console.log(data);
  return (
    <div className="w-full bg-gallery">
      <div className="w-[90%] mx-auto">
        <h3 className="text-[2rem] font-bold py-6">
          Some of our "must have's"
        </h3>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <div className="w-full mx-auto flex flex-wrap">
            {data.products.map((product: IProduct) => {
              return (
                <Card
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  src={product.image}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
