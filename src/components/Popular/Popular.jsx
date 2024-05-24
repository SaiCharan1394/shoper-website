import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular flex flex-col items-center gap-10 h-90vh pt-10 bg-slate-600">
      <h1 className="text-gray-700 text-4xl font-semibold">POPULAR IN WOMEN</h1>
      <hr className="w-full max-w-screen-2xl h-1 bg-gray-900 rounded-lg" />
      <div className="popular-item mt-10 flex flex-wrap justify-center gap-6">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
