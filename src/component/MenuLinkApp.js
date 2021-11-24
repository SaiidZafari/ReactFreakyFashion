 
import { Link, NavLink } from 'react-router-dom';
function MenuLinkApp({linkName="Link to", path="#"}) {
 
return (
  <li class="nav-item ">
    <Link class="nav-link active" aria-current="page" to={path}>
      {linkName}
    </Link>
  </li>
);
}
 
export default MenuLinkApp;