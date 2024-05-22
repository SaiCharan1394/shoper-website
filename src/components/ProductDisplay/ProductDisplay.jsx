import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex mx-10">
      {/* Left Side */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <img src={product.image} alt="" className="h-40" />
          <img src={product.image} alt="" className="h-40" />
          <img src={product.image} alt="" className="h-40" />
          <img src={product.image} alt="" className="h-40" />
        </div>
        <div>
          <img src={product.image} alt="" className="w-96 h-96" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col ml-20">
        <h1 className="text-gray-700 text-3xl font-semibold">{product.name}</h1>
        <div className="flex items-center mt-3 gap-2 text-gray-600 text-lg">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex gap-6 mt-10">
          <div className="text-gray-500 text-xl line-through">${product.old_price}</div>
          <div className="text-red-500 text-xl font-semibold">${product.new_price}</div>
        </div>
        <div className="text-gray-800 mt-6">
          <p className="mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur deserunt optio nam perferendis voluptatem.</p>
          <div className="mt-6">
            <h1 className="text-gray-600 text-lg font-semibold">Select Size</h1>
            <div className="flex mt-2 gap-4">
              <div className="px-6 py-2 bg-gray-100 border border-gray-300 rounded cursor-pointer">S</div>
              <div className="px-6 py-2 bg-gray-100 border border-gray-300 rounded cursor-pointer">M</div>
              <div className="px-6 py-2 bg-gray-100 border border-gray-300 rounded cursor-pointer">L</div>
              <div className="px-6 py-2 bg-gray-100 border border-gray-300 rounded cursor-pointer">XL</div>
              <div className="px-6 py-2 bg-gray-100 border border-gray-300 rounded cursor-pointer">XXL</div>
            </div>
          </div>
          <button
            className="mt-6 px-10 py-4 bg-red-500 text-white text-lg font-semibold rounded cursor-pointer"
            onClick={() => { addToCart(product.id) }}
          >
            ADD TO CART
          </button>
          <p className="mt-6 text-gray-600">
            <span className="font-semibold">Category :</span> Women, T-Shirt, Crop Top
          </p>
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">Tags :</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
