import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="flex justify-between items-center mx-20 md:mx-40 mb-10">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort flex items-center">
          Sort by <img src={dropdown_icon} alt="" className="ml-2" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-20 md:px-40 mb-10">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center mx-auto w-52 h-20 rounded-full bg-gray-300 text-gray-700 text-lg font-semibold mb-10">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
