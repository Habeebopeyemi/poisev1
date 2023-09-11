import React from "react";
import { Link } from "react-router-dom";
import Button from "Components/button/Button";
import type { IItems } from "interface/interface";

const Card: React.FC<IItems> = ({
  id,
  name,
  description,
  price,
  src,
  // viewProductHandler,
}) => {
  return (
    <div className="w-full max-w-[400px] mx-auto bg-card p-3 rounded-md sm:max-w-[300px] sm:mx-0">
      <div key={id} className="w-full">
        <div className="w-full h-[200px] mb-3 md:mb-4">
          <img
            src={src}
            alt=""
            loading="lazy"
            className="w-[100%] h-[100%] rounded-t-md"
          />
        </div>
        <div className="flex justify-between mb-3 md:mb-4">
          <h3 className="text-title font-bold sm:text-xl">{name}</h3>
          <p className="font-bold sm:text-xl">${price}</p>
        </div>
        <p className="text-descr mb-3 md:mb-4">{description}</p>
        <a
          href={`product/${id}`}
          className="block text-xs mb-3 underline md:mb-4"
        >
          Read more
        </a>
        <Link to={`product/${id}`}>
          <Button text={"View Product"} className="font-[800]" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
