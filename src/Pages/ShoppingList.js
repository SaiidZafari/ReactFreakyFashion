import { useState } from 'react';
import Counter from "../component/Counter";
import { useSelector} from 'react-redux';
import { removeFromCart } from './../redux/action/ProductAction';
import { shoppingCartReducer } from './../redux/reducers/productReducer';

function ShoppingList() {
 

  let shoppingCart = useSelector((state) => state.shoppingCart);

  const productsPrice = shoppingCart.reduce((a, c) => parseInt(a) + parseInt(c.price) , 0);

   
 
  const [totalPrice, setTotalPrice] = useState(productsPrice);  
  

  const removeHandle = (product) => {
   shoppingCartReducer.dispatch(removeFromCart(product));
  }

  return (
    <>
      <h1> ShoppingList </h1>
      <div className="ShoppingList d-flex justify-content-between">
        <table className="col-md-9 mt-5">
          <thead>
            <tr className="fs-3 border-bottom">
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Numder</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {shoppingCart &&
              shoppingCart.map((product, index) => (
                <tr className="fs-5 " key={product.id}>
                  <td className="col-1">
                    <img
                      className="w-100  rounded-circle"
                      src={
                        process.env.PUBLIC_URL + `/images/${product.imageUrl}`
                      }
                      alt="Coming Soon"
                    />
                  </td>
                  <td>
                    <label>{product.title}</label>
                  </td>
                  <td>
                    <label>{product.price}</label>
                  </td>
                  <td>
                    <Counter key={index} />
                  </td>
                  <td>
                    <button
                      onClick={() => removeHandle(product)}
                      className="btn btn-danger col-ms-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <table className="col-md-2 bg-primary fs-5 text-white rounded-3">
          <thead>
            <tr className="border-bottom">
              <th>Invoice</th>
            </tr>
            <tr>
              <th>Number of Items</th>
            </tr>
            <tr className="border-bottom">
              <th>{shoppingCart.length}</th>
            </tr>
            <tr>
              <th>Total Price</th>
            </tr>
            <tr>
              <th>{totalPrice}</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );

 

}

export default ShoppingList;
