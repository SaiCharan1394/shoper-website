import React from "react";
import arrowIcon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="flex items-center gap-8 text-gray-500 text-base font-semibold capitalize mt-16 ml-40">
      <span>Home</span>
      <img src={arrowIcon} alt="Arrow Icon" className="mx-2" />
      <span>Shop</span>
      <img src={arrowIcon} alt="Arrow Icon" className="mx-2" />
      <span>{product.category}</span>
      <img src={arrowIcon} alt="Arrow Icon" className="mx-2" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
