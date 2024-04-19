import React from "react";
import Banner from "./components/Banner/Banner";
import Trending from "./components/Trending/Trending";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const Mainpage: React.FC = () => {
  return (
    <>
      <Banner />
      <Trending />
      <Main />
      <Footer />
    </>
  );
};

export default Mainpage;
