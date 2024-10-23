import React from "react";

const dataDemo = [
  {
    Head: "List Your Phone with Confidence",
    img: "./images/phone.png",
    subPoint:
      "Sell your phone easily. We handle the quality check to ensure your device meets our high standards before it goes live.",
  },
  {
    Head: "Buy with Complete Assurance",
    img: "./images/shield.jpg",
    subPoint:
      "Shop certified phones with full peace of mind, knowing every device is verified and ready for you to enjoy.",
  },
  {
    Head: "Seller Gets Paid When You’re Satisfied",
    img: "./images/count_money.jpg",
    subPoint:
      "Your satisfaction is our priority. The seller gets paid only when you confirm the phone is exactly as promised!",
  },
];

const WoksDemo = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mb-10 underline">How It Works:</h1>
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-8">
        {dataDemo.map((item, index) => (
          <div
            key={index}
            className="max-w-sm p-5 border border-gray-200 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-4">
              <img
                src={item.img}
                alt={item.Head}
                className="w-20 h-48 rounded-md max-h-36"
              />
            </div>
            <h2 className="text-xl  text-center mb-2 font-bold">{item.Head}</h2>
            <p className="  ">{item.subPoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WoksDemo;
