import CartApp from "../component/CartApp";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { axios } from 'axios';
// import { setProducts } from './../redux/action/ProductAction';
// import { useEffect, useState} from 'react';
// import { products } from './../component/dataBase';


function Products() {

  // // useSelector to get data from redux data storage  
  const productsRedux = useSelector((state) => state.allProducts.products);
   
  return (
    <div className="Products">
      <h1> Products </h1>
      <Card />
      <div className="container d-flex flex-wrap justify-content-between align-items-center ">
        {productsRedux.map((product) => (
          <CartApp
            key={product.id}
            imageUrl={product.imageUrl}
            urlSlug={product.pageName}
            productName={product.title}
            productPrice={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;