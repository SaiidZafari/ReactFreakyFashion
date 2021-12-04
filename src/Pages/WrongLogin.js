 
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
function WrongLogin() {

    const shoppingCart = useSelector((state) => state.shoppingCart);
      
   
 
return (
  <div className="WrongLogin">
    <h1>Error page</h1>
    <Card />
    <div className="WrongLogin-content m-5 p-5 text-danger">
      { shoppingCart ? (
        <h1> Wrong Email Or Password Pleases Try Again. </h1>
      ) : (
        <h3 className="text-info mt-2">
          If you have not purchased a product yet, then you are not registered
          on this site.
        </h3>
      )}
    </div>
  </div>
);
}
 
export default WrongLogin;