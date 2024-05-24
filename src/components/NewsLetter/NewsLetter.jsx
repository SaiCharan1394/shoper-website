import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-96 flex flex-col items-center justify-center mx-auto px-4 md:px-24 mb-16 bg-gray-500 gap-8">
      <h1 className="text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold">Get Exclusive Offers On Your Email</h1>
      <p className="text-gray-700 text-lg">Subscribe to our newsletter and stay updated</p>
      <div className="flex items-center justify-center bg-white w-full max-w-xl h-20 md:h-24 border border-gray-300 rounded-full">
        <input
          type="email"
          placeholder="Your Email Id"
          className="w-4/5 px-4 py-2 text-gray-600 outline-none"
        />
        <button className="w-1/5 md:w-40 py-2 bg-black text-white font-semibold rounded-full">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
