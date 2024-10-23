import React from "react";

const TextBanner = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center md:h-96 p-5">
      <h1
        className="text-4xl font-bold text-center md:text-6xl lg:text-5xl"
        style={{ color: "#535970" }}
      >
        The Platform That Meets all your desires
      </h1>
      <p
        className="text-2xl text-center mt-4 md:text-4xl lg:text-5xl font-bold"
        style={{ color: "#456D49" }}
      >
        Delivered with trust -{" "}
        <span style={{ color: "#5C4798" }}>QuickSellify Team💙</span>
      </p>
    </div>
  );
};

export default TextBanner;
