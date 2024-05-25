import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md relative">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <p className="text-xl font-semibold text-gray-700">Shoper</p>
      </div>
      <div className="md:hidden">
        <ul onClick={toggleDropdown}>
          <p>Categories</p>
        </ul>
      </div>
      <ul
        className={`flex-col md:flex-row md:flex space-x-4 ${
          dropdownOpen
            ? "flex absolute  top-5  bg-white p-4 focus:outline-none"
            : "hidden"
        } md:block`}
      >
        <NavItem name="Shop" path="/" menu={menu} setMenu={setMenu} />
        <NavItem name="Men" path="/mens" menu={menu} setMenu={setMenu} />
        <NavItem name="Women" path="/womens" menu={menu} setMenu={setMenu} />
        <NavItem name="Kids" path="/kids" menu={menu} setMenu={setMenu} />
      </ul>
      <div className="flex items-center space-x-4">
        <Link to="/login" className="sm:hidden md:block">
          <button className="w-32 h-12 border border-gray-400 rounded-full text-gray-700 text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Login
          </button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="Cart" className="h-8" />
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {getTotalCartItems()}
          </div>
        </Link>
      </div>
    </div>
  );
};

const NavItem = ({ name, path, menu, setMenu }) => {
  return (
    <li
      onClick={() => setMenu(name.toLowerCase())}
      className={menu === name.toLowerCase() ? "border-b-2 border-red-500" : ""}
    >
      <Link to={path} className="text-lg font-semibold text-gray-700">
        {name}
      </Link>
    </li>
  );
};

export default Navbar;
