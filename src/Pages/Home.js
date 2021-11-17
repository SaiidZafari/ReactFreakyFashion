import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Navigation from "../component/Navigation";
import Header from "../component/Header";
import Hero from "../component/Hero";
import SpotsSection from "../component/SpotsSection";
import ProductSection from "../component/ProductSection";
import Footer from "../component/Footer";
import CopyRight from "../component/CopyRight";


function Home() {
    // const pageName = "Home";

    // const apiUrl = "http://localhost:4000/api/products";
    
    // const [productsApi, setProductsApi] = useState([]);
    
    // useEffect(() => {
    //   fetch("http://localhost:4000/api/products")
    //     .then((res) => res.json())
    //     .then((prod) => setProductsApi(prod));
    // });


  return (
    <div className="Home">
      <div className="Home-content">
        <Navigation />
        <div className="container">
          <Header pageTitle="Home" />
          <Card />
          <Hero />
          <Card />
          <SpotsSection  />
          <Card />
          <ProductSection sectionTitle="Winter Collaction" />
          <Card />
          <Footer />
          <Card />
          <CopyRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
