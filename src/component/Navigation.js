import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <ul className="nav bg-dark  justify-content-center mb-3 ">
        <li>
          <Link
            className="nav-link link-dark px-2 active fw-bold fs-5 text-white"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-link link-dark px-2 active fw-bold fs-5 text-white"
            to="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className="nav-link link-dark px-2 active fw-bold fs-5 text-white"
            to="/shoppingList"
          >
            ShoppingList
          </Link>
        </li>
        <li>
          <Link
            className="nav-link link-dark px-2 active fw-bold fs-5 text-white"
            to="/search"
          >
            Search
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
