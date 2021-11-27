import CartApp from "./CartApp";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./../redux/action/ProductAction";

function ProductSection({ sectionTitle = "Product Section",products}) {
  const productsRedux = useSelector(
    (state) => state.allProducts.products
  );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // });

  return (
    <div className="ProductSection">
      <h1> {sectionTitle} </h1>
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

export default ProductSection;
