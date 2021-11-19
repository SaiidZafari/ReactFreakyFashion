// import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
 
  return (
    <div className="Header">
      <div className="Header-content container">
        <div className="d-flex justify-content-between">
          <div>
            <Link to="/" className="text-decoration-none">
              <p
                style={{ fontFamily: "Edwardian Script ITC", fontSize:"3em" }}
                className="text-black fw-bold col-12"
              >
                Freaky Fashion
              </p>
            </Link>
            <p className="text-info fs-5"></p>
          </div>
          <div>
            <input
              // onChange={(text) => searchFilterFunction(text)}
              className="rounded-3 fs-5"
              placeholder="search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
