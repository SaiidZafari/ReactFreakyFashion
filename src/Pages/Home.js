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
    const pageName = "Home";
    
  const [productsApi, setProductsApi] = useState([]);
//    useEffect(() => {
//      console.log("useEffect invoked");

//      fetch("http://localhost:4000/api/products")
//       .then((res) => res.json())
//       .then((product) => setProductsApi(product));
//    }, []);

  return (
    <div className="Home">
      <div className="Home-content">
        <Navigation />
        <div className="container">
          <Header />
          <Card />
          <Hero />
          <Card />
          <SpotsSection products={productsApi} />
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
