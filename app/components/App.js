import React from 'react';
import Header from "./presentational/Header";
import Footer from "./presentational/Footer";
import ProductList from "./container/ProductList";
import dataItems from "../assets/json/products.json";

const App = () => {
  return (
    <div>
      <Header/>
      <div className="main-container">
        <ProductList {...dataItems}/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
