import CartApp from "./CartApp";
import { Card } from "react-bootstrap";
import { products } from "./dataBase";
import { useState, useEffect } from "react";


function ProductSection({ sectionTitle = "Product Section",}) {
  
  const apiLink = `http://localhost:4000/api/products`;

  const [productsApi, setProductApi] = useState(products);

  // useEffect(() => {
  //   fetch(apiLink)
  //     .then((resp) => resp.json())
  //     .then((products) => setProductApi(products));
  // });
 
  return (
    <div className="ProductSection">
      <h1> {sectionTitle} </h1>
      <Card />
      <div className="container d-flex flex-wrap justify-content-between align-items-center ">
        {productsApi.map((product) => (
          <CartApp
            imageUrl={process.env.PUBLIC_URL + `${product.imageUrl}`}
            // imageUrl={product.imageUrl}
            cartTitle = {product.pageName}
            productName={product.title}
            productPrice={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
