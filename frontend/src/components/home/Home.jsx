import React from "react";
import Slider from "./Slider";
import Banner from "./Banner";
import Products from "./products/Products";
import TextBanner from "./TextBanner";
import ShowImg from "./ShowImg";
import WoksDemo from "./WorksDemo";
const Home = () => {
  return (
    <div>
      <Slider />
      <Banner />
      <ShowImg />

      <Products />

      <TextBanner />
      <WoksDemo />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
