import React from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import { product_details } from "data";

const ProductCard: React.FC = () => {
  let { id } = useParams();
  // console.log(id)
  let product = product_details[Number(id)];

  return (
    <>
      <section className="w-full h-[100vh] bg-gallery p-4">
        <Details
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          src={product.src}
          details={product.details}
        />
      </section>
    </>
  );
};

export default ProductCard;
