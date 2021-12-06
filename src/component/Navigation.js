import { Link } from "react-router-dom";
import MenuLinkApp from './MenuLinkApp';
import SearchApp from './SearchApp';

function Navigation() {

  const menuLink = [
    { id:1, link: "Home", path: "/" },
    { id:2, link: "Products", path: "/products" },
    { id:3, link: "MyPage", path: "/login" },
    // { id:4, link: "Search", path: "/search" },
  ];
 
  
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark "
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid container">
        <Link
          style={{ fontFamily: "Edwardian Script ITC", fontSize: "1.5em" }}
          className="navbar-brand"
          to="/"
        >
          SZ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {menuLink.map((menu) => (
              <MenuLinkApp
                key={menu.id}
                linkName={menu.link}
                path={menu.path}
              />
            ))}
          </ul>
          <SearchApp />
         
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
