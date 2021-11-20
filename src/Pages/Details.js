import { Link, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';



function Details() {
 
  const productsRedux = useSelector((state) => state.allProducts.products);

  const { urlSlug } = useParams();
  
  let product = productsRedux.find( p => p.pageName === urlSlug);
   
  return (
    <div id="pForm" className="Details ">
      <h3 className="m-3 text-start text-info">{product.pageName}</h3>
      <div className="Details-content container d-flex flex-wrap">
        <div className="col-md-3" style={{}}>
          <img
            className="w-100 m-2 rounded-3"
            src={process.env.PUBLIC_URL + `/images/${product.imageUrl}`}
            alt="Coming soon"
          />
        </div>

        <div className="col-md-6">
          <div className="">
            <p className=" fs-1 fw-bold">{product.title}</p>
            <textarea
              className="border-white fs-5"
              name=""
              id={product.id}
              cols="50"
              rows="4"
              defaultValue={product.description}
            ></textarea>
          </div>
          <Link to="/shoppingList">
            <input
              id="pSubmit"
              className="btn btn-primary col-md-5 m-4"
              type="submit"
              value="Add To List"
              onClick={() => this.props.OnAddProduct(product.pageName)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default Details;