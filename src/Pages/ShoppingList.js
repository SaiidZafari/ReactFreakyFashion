import { useState, useEffect } from "react";
import Counter from "../component/Counter";
import CustomerInfo from "../component/CustomerInfo";
import { useSelector, useDispatch } from "react-redux";
import {removeFromCart} from "./../redux/action/ProductAction";


function ShoppingList(props) {
  const shoppingsCart = useSelector((state) => state.shoppingCart);

   const [cart, setCart] = useState(0);

  useEffect(() => {
    if (shoppingsCart) {
      setCart(shoppingsCart);
    }
  }, [shoppingsCart.length]);

  const [totalPrice, setTotalprice] = useState(0);

  const productsPrice = shoppingsCart.reduce(
    (a, c) => parseInt(a) + parseInt(c.price) * c.quantity ,
    0
  );

  const pieces = shoppingsCart.reduce(
    (a,c) => a + c.quantity,0
  );

  useEffect(() => {
    setTotalprice(productsPrice);
 },[productsPrice])

  const dispatch = useDispatch();


  const removeHandle = (product) => {
   dispatch(removeFromCart(product));
  };

  if (shoppingsCart.length < 1 || !shoppingsCart) {
    return <div className="fs-2 fw-bold text-warning">Cart Is Empty</div>;
  }


  return (
    <>
      <h1> ShoppingList </h1>
      <div className="ShoppingList d-flex justify-content-between">
        <table className="col-md-10 mt-5">
          <thead>
            <tr className="fs-5 border-bottom">
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart &&
              cart.map((product, index) => (
                <tr className="fs-5 " key={index}>
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
                    <Counter addId={index} product={product} />
                  </td>
                  <td>
                    <label>{product.price * product.quantity}</label>
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

        <table className="col-md-2 bg-primary fs-6 text-white rounded-3">
          <thead>
            <tr className="border-bottom">
              <th>Invoice</th>
            </tr>            
            <tr>
              <th>Items and Pieces</th>
            </tr>
            <tr className="border-bottom">
              <th className="text-warning">
                {shoppingsCart.length} and {pieces}{" "}
              </th>
            </tr>
            <tr>
              <th>Total Price</th>
            </tr>
            <tr>
              <th className="text-warning">{totalPrice}</th>
            </tr>
          </thead>
        </table>
      </div>
      <CustomerInfo customerBuy={shoppingsCart} />
    </>
  );
}

export default ShoppingList;
