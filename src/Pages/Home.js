import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import Hero from "../component/Hero";
import SpotsSection from "../component/SpotsSection";
import ProductSection from "../component/ProductSection";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/ProductAction";

function Home({ productsRedux }) {

 
  
  productsRedux = useSelector((state) => state.allProducts.products);

  // const [productsApi, setProductApi] = useState(products);

  // ComponentDidMount(){
  //   fetch('http://localhost:4000/api/products')
  //     .then((resp) => resp.json())
  //     .then((prod) => setProductApi(prod));
  // }


   const dispatch = useDispatch();

   //using Axios to get data from API
   const productsApi = async () => {
     const response = await axios
       .get("http://localhost:4000/api/products")
       .catch((err) => {
         console.log("err", err);
       });

     dispatch(setProducts(response.data));
   };

   // using useEffect to add data to the system
   useEffect((props) => {
     productsApi();
   });



  const textHero = `Welcome to Fashion Freak. At, fashion freak, we bring to the industry best fashions in one store. Buy from our wide range of designer T-shirts, shirts, jeans, ... May 1, 2020 - Explore Roadkill Girl's board "Freaky Fashion", followed by 276 people on Pinterest. See more ideas about fashion, weird fashion, how to wear it.`;

  return (
    <div className="Home">
      <div className="Home-content">
        <Hero
          titleHero="Fashion festival"
          descriptionHero={textHero}
          imgUrlHero="Woman.jpg"
          altHero="Woman"
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
