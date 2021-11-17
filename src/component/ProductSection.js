import CartApp from "./CartApp";
import { Card } from "react-bootstrap";
import { products } from "./dataBase";

function ProductSection({ sectionTitle = "Product Section", productApi = [] }) {
 
  return (
    <div className="ProductSection">
      <h1> {sectionTitle} </h1>
      <Card/>
      <div className="container d-flex flex-wrap justify-content-between align-items-center ">

        {products.map((product) => (
          <CartApp
            imageUrl={product.imageUrl}
            productName={product.title}
            productPrice={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
