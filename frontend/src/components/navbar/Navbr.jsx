// Navbar.js
import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { SiSellfy } from "react-icons/si";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
const Navbr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-gradient-to-b from-[#ecdcdc] to-white  sticky">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-evenly items-center">
          <div className="text-2xl font-bold">MyLogo</div>

          <div className=" ml-20  text-2xl font-bold flex items-center  text-gray-600    ">
            <FaLocationDot style={{ color: "#616161" }} />
            Location
          </div>

          <div className="md:hidden ml-4">
            {" "}
            {/* Add margin-left to create space */}
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar and Dropdown */}
        <div className="relative flex items-center max-w-md w-full my-4 md:my-0 md:ml-4 md:flex-grow ">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="absolute left-3 bg-gray-700 text-white rounded-2xl border-none focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Laptops">Laptops</option>
            <option value="Mobile">Mobile</option>
            <option value="Chair">Chair</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="pl-32 pr-10 py-2 bg-gray-700 text-white rounded-2xl focus:outline-none w-full"
            style={{ boxShadow: "5px 5px 5px #e2d3d3" }}
          />
          <span className="absolute right-3">
            <HiSearch className="text-white text-lg" />
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 md:ml-4">
          <a
            href="#"
            className="text-gray-600 font-bold hover:text-gray-800 text-2xl flex items-center"
          >
            <RiLoginCircleFill style={{ color: "#616161" }} />
            Login
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-2xl font-bold pl-12 flex items-center"
          >
            <SiSellfy
              style={{
                color: "#616161",
                padding: "0px",
              }}
              className="mr-2"
            />
            Sell Now
          </a>
        </div>
      </div>

      {/* Mobile Links */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 py-2 bg-gray-100">
          <a
            href="#"
            className="text-gray-600 font-bold hover:text-gray-800 text-2xl flex items-center"
          >
            <RiLoginCircleFill style={{ color: "#616161" }} />
            Login
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-2xl font-bold pl-12 flex items-center mt-2"
          >
            <SiSellfy
              style={{
                color: "#616161",
              }}
              className="mr-2"
            />
            Sell Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbr;
