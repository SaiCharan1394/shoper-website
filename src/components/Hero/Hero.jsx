import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex-col justify-center items-center md:flex md:flex-row  bg-black">
      <div className="flex-1 flex flex-col justify-center items-center gap-20 pt-10">
        <h2 className="text-black text-2xl lg:text-3xl font-semibold">NEW ARRIVALS ONLY</h2>
        <div className="flex flex-col lg:items-start gap-4">
          <div className="flex items-center gap-4">
            <p className="text-gray-800 text-lg font-semibold">new</p>
            <img src={hand_icon} alt="New icon" className="h-12" />
          </div>
          <p className="text-gray-800 text-4xl lg:text-6xl font-bold">collections</p>
          <p className="text-gray-800 text-4xl lg:text-6xl font-bold">for everyone</p>
        </div>
        <div className="flex items-center">
          <div className="bg-black text-white py-4 px-12 rounded-full text-lg font-semibold shadow-md hover:bg-gray-800 transition duration-300">
            Latest Collection
          </div>
          <img src={arrow_icon} alt="Arrow icon" className="ml-4 h-6 w-6" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={hero_image} alt="Hero image" className="max-w-lg lg:max-w-full" />
      </div>
    </div>
  );
};

export default Hero;
