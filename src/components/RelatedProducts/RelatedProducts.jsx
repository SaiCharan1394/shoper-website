import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold">Related Products</h1>
      <hr className="w-52 h-2 mt-2 mb-4 rounded-full bg-gray-700" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-4 gap-6">
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

export default RelatedProducts;
