import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Navigation from "../component/Navigation";

import Hero from "../component/Hero";
import SpotsSection from "../component/SpotsSection";
import ProductSection from "../component/ProductSection";



function Home() {
  const pageName = "Home";

    // const apiLink = `http://localhost:4000/api/products`;

    // const [productsApi, setProductApi] = useState([]);

    // useEffect(() => {
    //   fetch(apiLink)
    //     .then((resp) => resp.json())
    //     .then((products) => setProductApi(products));
    // }, []);


  return (
    <div className="Home">
      <div className="Home-content">
       
          <Hero />
          <Card />
          <SpotsSection  />
          <Card />
          <ProductSection sectionTitle="Winter Collaction" />
         
        </div>
      </div>
    
  );
}

export default Home;
