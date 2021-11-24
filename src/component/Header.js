// import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
 
  return (
    <div className="Header">
      <div className="Header-content container">
        <div className="d-flex flex-wrap justify-content-between">
          <div>
            <Link to="/" className="text-decoration-none">
              <p
                style={{ fontFamily: "Edwardian Script ITC", fontSize: "3em" }}
                className="text-black fw-bold col-12"
              >
                Freaky Fashion
              </p>
            </Link>
            <p className="text-info fs-5"></p>
          </div>
          <div className="">
            <Link to="/shoppingList">
              <div className="mt-2 position-relative">
                <img
                  src={process.env.PUBLIC_URL + "/images/Basket.png"}
                  width="35px"
                  alt="Basket"
                />
                <span className="badge bg-danger rounded-circle position-absolute start-0 ">
                  2
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
