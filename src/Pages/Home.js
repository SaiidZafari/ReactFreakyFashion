import React, { useState } from "react";
import { Card } from "react-bootstrap";

import Hero from "../component/Hero";
import SpotsSection from "../component/SpotsSection";
import ProductSection from "../component/ProductSection";

function Home({ heroData }) {
 
  const { titleH, descriptionH, imageUrlH, altH, buttonTextH } = heroData;

  return (
    <div className="Home">
      <div className="Home-content">
        <Hero
          titleHero={titleH}
          descriptionHero={descriptionH}
          imageUrlHero={imageUrlH}
          buttonTextHero={buttonTextH}
          altHero={altH}
        />
        <Card />
        <SpotsSection />
        <Card />
        <ProductSection sectionTitle="Popular Products" />
      </div>
    </div>
  );
}

export default Home;
