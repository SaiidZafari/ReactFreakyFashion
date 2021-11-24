 
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Search(props) {
  const productsRedux = useSelector((state) => state.allProducts.products);

  return (
    <div className="Search">
      <h1 className="text-info"> Search </h1>
      <Card />
      <div className="d-flex col-md-12">
        <div className="mt-5 ">
          {productsRedux.map((product) => (
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
        <div className="col-md-2 mt-5">
          <ul className=" bg-primary fs-5 text-white rounded-3">
            <li className="border-bottom">
              <th>Search Result</th>
            </li>
            <li>
              <th>Search Term</th>
            </li>
            <li className="border-bottom">
              <th>xxxx</th>
            </li>
            <li>
              <th>Number of Item</th>
            </li>
            <li>
              <th>XXXX</th>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default Search;