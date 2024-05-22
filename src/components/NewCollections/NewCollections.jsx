import React from "react";
import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-10 mb-16">
      <h1 className="text-4xl font-bold text-gray-800">NEW COLLECTIONS</h1>
      <hr className="w-full max-w-4xl h-2 bg-gray-800 rounded-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10">
        {new_collections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
