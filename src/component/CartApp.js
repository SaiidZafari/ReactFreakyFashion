 

function CartApp({
  productName = "Winter coat",
  productPrice = 1200,
  cartTitle,
  imageUrl = "Freestocks.jpg",
}) {
  return (
    <div className="InfoCart m-1 col-md-3">
      <a
        href="/Products/CartApp"
        className="InfoCart-content cart  align-content-center text-decoration-none text-reset"
      >
        <p> {cartTitle} </p>
        <img
          className="w-100 rounded-3"
          src={process.env.PUBLIC_URL + `/images/${imageUrl}`}
          alt="Freestocks"
        />
        <div className="d-flex justify-content-between">
          <p className="fw-bold fs-5 text-decoration-none text-reset">
            {productName}
          </p>
          <p className="fw-bold fs-5">{productPrice} SEK</p>
        </div>
      </a>
    </div>
  );
}
 
export default CartApp;