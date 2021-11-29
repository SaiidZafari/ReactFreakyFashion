import React, { useState } from "react";
import { Card } from "react-bootstrap";

import Hero from "../component/Hero";
import SpotsSection from "../component/SpotsSection";
import ProductSection from "../component/ProductSection";
import { useSelector } from 'react-redux';

function Home({ heroData }) {
 // const herosData = useSelector((state) => state.heros.products[0]);

  const [hrrosData, setHerosData] = useState([]);
  

  // const textHero = `Welcome to Fashion Freak. At, fashion freak, we bring to the
  // industry best fashions in one store. Buy from our wide range of designer
  // T-shirts, shirts, jeans, ... May 1, 2020 - Explore Roadkill Girl's board
  //  "Freaky Fashion", followed by 276 people on Printer.
  //  See more ideas about fashion, weird fashion, how to wear it.`;

  return (
    <div className="Home">
      <div className="Home-content">
        {heroData.map((heroData, index) =>(
          
          <Hero
            key={index}
            titleHero={heroData.titleH}
            descriptionHero={heroData.descriptionH}
            imageUrlHero={heroData.imageUrlH}
            buttonTextHero={heroData.buttonTextH}
            altHero={heroData.altH}
          />
        ))}
        
        <Card />
        <SpotsSection />
        <Card />
        <ProductSection sectionTitle="Popular Products" />
      </div>
    </div>
  );
}

export default Home;
