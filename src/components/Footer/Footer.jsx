import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      <div className="flex items-center gap-[20px]">
        <img src={footer_logo} alt="Shoper logo" className="h-[50px]" />
        <p className="text-[46px] font-bold text-[#383838]">Shoper</p>
      </div>
      <ul className="sm:grid sm:grid-cols-2 md:flex-row md:flex list-none gap-[50px] text-[#252525] text-[20px]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-[20px]">
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={instagram_icon} alt="Instagram" className="w-full h-full" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={pintester_icon} alt="Pintester" className="w-full h-full" />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={whatsapp_icon} alt="WhatsApp" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
