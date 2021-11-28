import { Link } from "react-router-dom";
import MenuLinkApp from './MenuLinkApp';
import SearchApp from './SearchApp';

function Navigation(props) {

  const menuLink = [
    { id:1, link: "Home", path: "/" },
    { id:2, link: "Products", path: "/products" },
    { id:3, link: "ShoppingList", path: "/shoppingList" },
    { id:4, link: "Search", path: "/search" },
  ];
 
  
 console.log(props);
  return (
    <nav
      class="navbar navbar-expand-md navbar-dark bg-dark "
      aria-label="Fourth navbar example"
    >
      <div class="container-fluid container">
        <Link
          style={{ fontFamily: "Edwardian Script ITC", fontSize: "1.5em" }}
          class="navbar-brand"
          to="#"
        >
          SZ
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
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
