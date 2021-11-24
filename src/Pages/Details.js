import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart,
} from "../redux/action/ProductAction";
//import { addToCart } from "../redux/action/ProductAction";

import axios from "axios";
import { shoppingCartReducer } from './../redux/reducers/productReducer';
import ShoppingList from './ShoppingList';

// export class Details extends Component {

function Details() {
  const productRedux = useSelector((state) => state.product);

let shopping = useSelector((state) => state.shoppingCart);

  console.log(productRedux);
  const { urlSlug } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:4000/api/products/${urlSlug}`)
      .catch((err) => {
        console.log("err", err);
      });

    dispatch(selectedProduct(response.data));

    console.log(response.data);
  };

  useEffect(() => {
    if (urlSlug && urlSlug !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [urlSlug]); // run every time urlSlug change

  //-----------------------------------------------

  const addToCartHandler = () => {
    dispatch(addToCart(productRedux));
  };



  // const addToCartHandler = () => {
  //   dispatch(addToCart(productRedux));
  //   console.log("Button :", productRedux);
  // };

  // function handleSubmit() {
  //   dispatch(addToCart(productRedux));
  //   console.log("Add To List.", urlSlug);
  // }

  //const productsRedux = useSelector((state) => state.allProducts.products);

  // let product = productsRedux.find((p) => p.urlSlug === urlSlug);

  // dispatch(addToCart(product));

  // const fetchProductDetail = async () => {
  //   const response = await axios
  //     .get(`http://localhost:4000/api/products/${urlSlug}`)
  //     .catch((err) => {
  //       console.log("err", err);
  //     });

  //   dispatch(addToCart(response.data));
  // };

  // function addToCartHandler() {

  // }

  const { id, pageName, imageUrl, title, description, price } = productRedux;

  return (
    <div id="pForm" className="Details ">
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
            <button
              onClick={addToCartHandler}
              className="btn btn-primary col-md-5 m-4"
            >Submit</button>
            {/* <Link to="/shoppingList">
              <input
                onClick={addToCartHandler}
                className="btn btn-primary col-md-5 m-4"
                type="submit"
              />
            </Link> */}

            {/* <formm onSubmit={handleSubmit}>
              <button className="btn btn-primary col-md-5 m-4" type="submit">
                Add ti List
              </button>
            </formm> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
