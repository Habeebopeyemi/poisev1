import React, { useState } from "react";
import Card from "Components/card/Card";
import type { PaginationProps } from "antd";
import { Spin, Pagination } from "antd";
import { useGetProductsQuery } from "redux/actions/services";
import type { IProduct } from "interface/interface";
const Gallery: React.FC = () => {
  const [current, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery("products?page=" + current);
  // console.log(data);
  const onChange: PaginationProps["onChange"] = (page) => {
    setPage(page);
  };
  return (
    <>
      <div className="w-full bg-gallery" id="products">
        <div className="w-[95%] mx-auto lg:w-full">
          <h3 className="text-[1.5rem] py-6 text-center font-bold uppercase">Feed your eyes</h3>
          {isLoading ? (
            <div className="w-[20%] align-center mx-auto my-[50vh] text-center">
              <Spin />
              <p>Loading...</p>
            </div>
          ) : (
            <div className="w-full mx-auto flex justify-center flex-wrap gap-4 md:w-[87%] lg:w-full lg:gap-3 xl:gap-6">
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
          <div className="flex p-4">
            <Pagination
              current={current}
              onChange={onChange}
              total={data?.totalItems}
              style={{ margin: "0 auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
