 
import { Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
// import { useEffect } from "react";
// import {searchProducts} from "../redux/action/ProductAction";
import { useSelector } from "react-redux";

function Search(props) {
  //const productsRedux = useSelector((state) => state.allProducts.products);
  
  
   let [urlSearchParams] = useSearchParams();

   const q = urlSearchParams.get("q");

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (q !== "") {
  //     dispatch(searchProducts(q));
  //   }
  // });


  const searchRes = useSelector((state) => state.searchedProducts.products.result);

  const count = useSelector((state) => state.searchedProducts.products.count); 

  return (
    <div className="Search">
      <h1 className="text-info"> Search </h1>
      <Card />
      <div className="d-flex col-md-12">
        <div className="mt-5 ">
          {searchRes.map((product) => (
            <div className="d-flex  m-2" key={product.id}>
              <div className="col-1 ">
                <img
                  className="w-100 rounded-3 "
                  src={process.env.PUBLIC_URL + `/images/${product.imageUrl}`}
                  alt="Coming Soon"
                />
              </div>

              <div className=" offset-1">
                <div className="d-flex col-md-9  fs-5 fw-bold justify-content-between pe-5 ">
                  <label>{product.title}</label>
                  <label>{product.price}</label>
                </div>
                <p className="col-md-9 text-start ">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-2 mt-5 ">
          <div className=" bg-primary fs-5 text-white rounded-3 ">
            <div className="border-bottom ">Search Result</div>
            <div>Search Term</div>
            <div className="border-bottom">{q !== "" ? q : "Empty"}</div>
            <div>Number of Item</div>
            <div>{count}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Search;