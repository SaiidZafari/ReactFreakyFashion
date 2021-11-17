import CartApp from "./CartApp";
import { Card } from "react-bootstrap";

function ProductSection({ sectionTitle = "Product Section" }) {
  return (
    <div className="ProductSection">
      <h1> {sectionTitle} </h1>
      <Card />
      <div className="ProductSection-content d-flex justify-content-between align-items-center">
        <CartApp />
        <CartApp
          imageUrl="Mountain.jpg"
          productName="Mountain"
          productPrice="599"
        />
        <CartApp imageUrl="Naeim-Jafari.jpg" />
        <CartApp imageUrl="heart.jpg " />
      </div>
    </div>
  );
}

export default ProductSection;
