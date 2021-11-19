import CartApp from "./CartApp";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function ProductSection({ sectionTitle = "Product Section" }) {

  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="ProductSection">
      <h1> {sectionTitle} </h1>
      <Card />
      <div className="container d-flex flex-wrap justify-content-between align-items-center ">
        {products.map((product) => (
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

export default ProductSection;
