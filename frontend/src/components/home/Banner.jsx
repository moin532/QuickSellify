// Banner.js
import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-80 flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/07/99/13/51/1000_F_799135186_B4smb5m9yHP5958F60fTfStWrSiqeMrG.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-50 p-5 rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Buy and Sell with Confidence
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Quality Checked, Hassle-Free, and Transparent!
        </p>
        <p className="mb-6">
          From electronics to handmade creations, we’ve got it all – Verified by
          us, trusted by you.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
