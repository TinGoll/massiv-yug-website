import React from "react";
import About from "../about/About";
import Banner from "../banner/Banner";
import ContacUs from "../footer/ContacUs";
import Gallery from "../gallery/Gallery";
import Header from "../header/Header";
import Product from "../product/Product";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <About />
      <Product />
      <Gallery />
      <ContacUs />
    </div>
  );
}

export default App;
