import React from "react";
import Button from "Components/button/Button";
import type { IItems } from "interface/interface";

const Card: React.FC<IItems> = ({
  id,
  name,
  description,
  price,
  src,
  viewProductHandler,
}) => {
  return (
    <div className="bg-card p-3 rounded-md m-3 sm:max-w-[280px] md:max-w-[300px]">
      <div key={id} className="w-full">
        <div className="w-full mb-3 md:mb-4">
          <img
            src={src}
            alt=""
            loading="lazy"
            className="w-[100%] rounded-t-md"
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
        <Button text={"View Product"} onclick={viewProductHandler}/>
      </div>
    </div>
  );
};

export default Card;
