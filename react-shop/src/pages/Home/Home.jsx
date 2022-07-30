import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header
        title='Discover our Daily product'
        subTitle='Today we go a lot of products waiting for you!'
      />

      <div>
        <Product />
      </div>
    </React.Fragment>
  );
};

export default Home;
