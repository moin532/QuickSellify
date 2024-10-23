import React from "react";

const Slider = () => {
  const categories = [
    { name: "Mobiles", image: "/images/mobiles.png" },
    { name: "Laptops", image: "/images/laptops.png" },
    { name: "Wheel Chairs", image: "/images/chairs.png" },
    { name: "Automobile Spares & Parts", image: "/images/automobile.png" },
    { name: "Books & Stationery", image: "/images/stationary.png" },
    { name: "Electricals & Lights", image: "/images/hardware.png" },
    { name: "Furniture & Interior Decorative", image: "/images/interior.png" },
    { name: "Others", image: "./images/others.png" },
    { name: "Handmade Products", image: "/images/others.png" },
  ];
  // frontend\public\images\automobile.png
  return (
    <div className="banner-container w-full overflow-hidden">
      <div className="banner-content flex space-x-8 p-2 animate-scroll">
        {categories.concat(categories).map((category, index) => (
          <div
            key={index}
            className="category-item flex flex-col items-center justify-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="category-image w-24 h-16 object-cover rounded-lg sm:max-w-24 sm:h-16 md:w-32 md:h-24"
            />
            <h2 className="category-text text-center mt-2 text-black text-sm sm:text-lg">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
