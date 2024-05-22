import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-80 sm:w-96 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="w-full cursor-pointer"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${props.id}`}>
          <p className="text-gray-800 font-semibold text-lg mb-2">{props.name}</p>
        </Link>
        <div className="flex justify-between items-center">
          <div className="text-gray-900 font-semibold text-lg">${props.new_price}</div>
          {props.old_price && (
            <div className="text-gray-500 font-medium text-lg line-through">${props.old_price}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
