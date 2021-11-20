import React, { useEffect } from "react";
 import axios from "axios";
import CartApp from "../component/CartApp";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/ProductAction";

function Products() {

  // // useSelector to get data from redux data storage  
  const productsRedux = useSelector((state) => state.allProducts.products);

    //Dispatch the data
  // const dispatch = useDispatch();

  // //using Axios to get data from API  
  // const productsApi = async () => {
  //   const response = await axios
  //     .get("http://localhost:4000/api/products")
  //     .catch((err) => {
  //       console.log("err", err);
  //     });

  //   dispatch(setProducts(response.data));
  // };

  // // using useEffect to add data to the system
  // useEffect(() => {
  //   productsApi();
  // },[]);


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