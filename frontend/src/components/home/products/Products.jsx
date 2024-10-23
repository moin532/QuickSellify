import React from "react";
import "./Products.css"; // Add a custom CSS file for complex animations and effects

const Products = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Crunchy Cornflakes",
      price: "₹4.99",
      image:
        "https://cdn.pixabay.com/photo/2020/03/06/16/16/cornflakes-4907490_640.jpg",

      location: "Bangalore, near Majestic",
    },
    {
      id: 2,
      name: "Fresh Apples",
      price: "₹2.49",
      image:
        "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_640.jpg",
      location: "Bangalore, near Majestic",
    },
    {
      id: 3,
      name: "Organic Carrots",
      price: "₹1.99",
      image:
        "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg",
      location: "Bangalore, near Majestic",
    },
    {
      id: 4,
      name: "Whole Wheat Bread",
      price: "₹3.49",
      image:
        "https://cdn.pixabay.com/photo/2016/12/06/18/27/loaf-1887235_640.jpg",
      location: "Bangalore, near Majestic",
    },
  ];

  return (
    <div>
      <div className=" mt-12 px-4">
        <h1 className=" flex  text-center justify-center text-4xl font-bold mb-6 underline-offset-1">
          Top Selling Products
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 shadow-lg rounded-lg p-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative"
            >
              {/* Product Image with Hover Effect */}
              <div className="relative overflow-hidden rounded-lg h-64 lg:h-72 sm:h-40 flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                {/* Thunder Animation */}
                <div className="thunder-effect"></div>
              </div>

              {/* Product Info */}
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className=" text-green-600 font-bold mt-2  text-3xl">
                  {product.price}
                </p>
                <p className="text-gray-600 mt-2 font-bold">
                  {product.location}
                </p>
              </div>
            </div>
          ))}
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 shadow-lg rounded-lg p-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative"
            >
              {/* Product Image with Hover Effect */}
              <div className="relative overflow-hidden rounded-lg h-64 lg:h-72 sm:h-40 flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                {/* Thunder Animation */}
                <div className="thunder-effect"></div>
              </div>

              {/* Product Info */}
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className=" text-green-600 font-bold mt-2  text-3xl">
                  {product.price}
                </p>
                <p className="text-gray-600 mt-2 font-bold">
                  {product.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-12 px-4">
        <h1 className=" flex  text-center justify-center text-4xl font-bold mb-6 underline-offset-1">
          All Products
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 shadow-lg rounded-lg p-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative"
            >
              {/* Product Image with Hover Effect */}
              <div className="relative overflow-hidden rounded-lg h-64 lg:h-72 sm:h-40 flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                />
                {/* Thunder Animation */}
                <div className="thunder-effect"></div>
              </div>

              {/* Product Info */}
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className=" text-green-600 font-bold mt-2  text-3xl">
                  {product.price}
                </p>
                <p className="text-gray-600 mt-2 font-bold">
                  {product.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
