import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="md:mt-[100px] md:mx-[170px] sm:mt-[10px] sm:mx-[17px]">
      <div className="md:grid md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] text-[#454545] text-[18px] font-semibold ">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0 sm:hidden md:block" />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] text-[#454545] text-[17px] font-medium">
                <img src={e.image} alt="" className="h-[62px]" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-[64px] h-[50px] border-2 border-[#ebebeb] bg-white">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="w-[15px] mx-[40px] cursor-pointer"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr className="h-[3px] bg-[#e2e2e2] border-0" />
            </div>
          );
        }
        return null;
      })}

      <div className="flex mt-[100px] sm:flex-col sm:gap-6 "> 
        <div className="flex flex-col flex-1 mr-[200px] gap-[40px] sm:order-2 md:order-1">
          <h1>Cart Totals</h1>
          <div>
            <div className="flex justify-between py-[15px]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="h-[3px] bg-[#e2e2e2] border-0" />
            <div className="flex justify-between py-[15px]">
              <p>Shipping Fee</p>
              <p>Fee</p>
            </div>
            <hr className="h-[3px] bg-[#e2e2e2] border-0" />
            <div className="flex justify-between py-[15px]">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-[262px] h-[58px] border-none bg-[#ff5a5a] text-white text-[16px] font-semibold cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="flex-1 text-[16px] font-medium sm:order-1 md:order-2">
          <p>If you have a promo code, enter it here</p>
          <div className="md:w-[504px] sm:w-[345px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex items-center">
            <input
              type="text"
              placeholder="promo code"
              className="border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px] "
            />
            <button className="w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
