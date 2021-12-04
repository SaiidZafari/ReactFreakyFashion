 import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from './../redux/action/ProductAction';


function Header({accessLogin} ) {

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(setLogin(true));
},[dispatch])

  // const login = useSelector((state) => state.login)

  const shoppingCart = useSelector((state) => state.shoppingCart);

  const handleLogout = () => {   
      dispatch(setLogin(true));
  }
 
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
          <div className="text-end">
            <div className="mt-1">{/* <SearchApp /> */}</div>

            <div className="mt-2 position-relative">
              <Link to="/shoppingList">
                <img
                  src={process.env.PUBLIC_URL + "/images/Basket.png"}
                  width="35px"
                  alt="Basket"
                />

                <span className="badge bg-danger rounded-circle position-absolute end-0 me-3 ">
                  {shoppingCart.length}
                </span>
              </Link>
            </div>

            <div className="mt-2">
              {(accessLogin.access) ? (
                <Link to="/login">
                  <img
                    src={process.env.PUBLIC_URL + "/images/Login.png"}
                    width="100px"
                    alt="Basket"
                  />
                </Link>
              ) : (
                <Link to="/" onClick={handleLogout}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/Logout.png"}
                    width="100px"
                    alt="Basket"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
