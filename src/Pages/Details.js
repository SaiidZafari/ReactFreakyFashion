import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchProduct, addToCart,} from "../redux/action/ProductAction";
import { Card } from "react-bootstrap";

function Details() {


  const productRedux = useSelector((state) => state.product);

  const { urlSlug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (urlSlug.length > 0) dispatch(fetchProduct(urlSlug));
  }, [urlSlug]); // run every time urlSlug change

  //-----------------------------------------------

  const addToCartHandler = () => {
    dispatch(addToCart(productRedux));
  };

  const { id, pageName, imageUrl, title, description, price } = productRedux;

  return (
    <div id="pForm" className="Details ">
      <h1> Details </h1>
      <Card />
      <h3 className="m-3 text-start text-info">{pageName}</h3>
      {Object.keys(productRedux).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="Details-content container d-flex flex-wrap">
          <div className="col-md-3" style={{}}>
            <img
              className="w-100 m-2 rounded-3"
              src={process.env.PUBLIC_URL + `/images/${imageUrl}`}
              alt="Coming soon"
            />
          </div>

          <div className="col-md-6">
            <div className="">
              <p className=" fs-1 fw-bold">{title}</p>
              <textarea
                className="border-white fs-5"
                name=""
                id={id}
                cols="50"
                rows="4"
                defaultValue={description}
              ></textarea>
              <p className="fs-2 fw-bold ">
                {price} <span className="fs-6 text-black-50">SEK </span>{" "}
              </p>
            </div>

            <Link to="/shoppingList">
              <input
                onClick={addToCartHandler}
                className="btn btn-primary col-md-5 m-4"
                type="submit"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
