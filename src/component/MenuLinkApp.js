 
import { Link } from 'react-router-dom';
function MenuLinkApp({linkName="Link to", path="#"}) {
 
return (
  <li className="nav-item ">
    <Link className="nav-link active" aria-current="page" to={path}>
      {linkName}
    </Link>
  </li>
);
}
 
export default MenuLinkApp;