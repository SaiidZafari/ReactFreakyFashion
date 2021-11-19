import { Link } from "react-router-dom";

function CartApp({
  productName = "Winter coat",
  productPrice = 1200,
  urlSlug ,
  imageUrl = "Freestocks.jpg",
  currency = "SEK",
}) {
  return (
    <div className="InfoCart p-1 col-md-3">
      <Link
        to={`/Products/${urlSlug}`}
        className="InfoCart-content cart  align-content-center text-decoration-none text-reset"
      >
        <p> </p>
        <img
          className="w-100 rounded-3"
          src={process.env.PUBLIC_URL + `/images/${imageUrl}`}
          alt="Freestocks"
        />
        <div className="d-flex justify-content-between">
          <p className="fw-bold fs-5 text-decoration-none text-reset">
            {productName}
          </p>
          <p className="fw-bold fs-5">
            {productPrice} {currency}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CartApp;
