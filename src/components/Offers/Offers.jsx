import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className=" w-full max-w-screen-2xl h-96 flex mx-auto px-4 md:px-24 mb-16 bg-yellow-600 mt-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Exclusive</h1>
        <h1 className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Offers For You</h1>
        <p className="text-gray-700 text-lg md:text-xl font-semibold mb-8">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="py-2 px-6 bg-red-500 text-white font-semibold rounded-full text-lg md:text-xl hover:bg-red-600 transition duration-300">Check Now</button>
      </div>
      <div className="flex justify-end items-center flex-1 p-8">
        <img src={exclusive_image} alt="" className="w-full md:w-auto h-full" />
      </div>
    </div>
  );
};

export default Offers;
