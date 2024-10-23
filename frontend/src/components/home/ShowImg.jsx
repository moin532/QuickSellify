import React from "react";

const ShowImg = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/18105/pexels-photo.jpg?cs=srgb&dl=pexels-morningtrain-18105.jpg&fm=jpg",
      Route: "",
    },
    {
      url: "https://images.pexels.com/photos/1631918/pexels-photo-1631918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Route: "",
    },
    {
      url: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Route: "",
    },
    {
      url: "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Route: "",
    },
  ];
  return (
    <div className=" flex justify-between h-52 mt-4  img_main bg-slate-300   ">
      {images.map((elem) => {
        return (
          <img
            src={elem.url}
            alt=""
            className="img_show  w-80 p-2 transition-transform duration-300 hover:scale-110 cursor-pointer  shadow-gray-300"
          />
        );
      })}
    </div>
  );
};

export default ShowImg;
