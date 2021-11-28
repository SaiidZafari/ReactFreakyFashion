import { useState, useEffect } from "react";
import Counter from "../component/Counter";
import CustomerInfo from "../component/CustomerInfo";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  removeSelectedProduct,
} from "./../redux/action/ProductAction";

function ShoppingList(props) {
  let shoppingsCart = useSelector((state) => state.shoppingCart);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = JSON.parse(localStorage.getItem("counter"));
    if (counter) {
      setCount(counter);
    }
  }, []);

  console.log("SZ: ", count);

  const productsPrice = shoppingsCart.reduce(
    (a, c) => parseInt(a) + parseInt(c.price),
    0
  );

  const [totalPrice] = useState(productsPrice);

  const dispatch = useDispatch();

  const removeHandle = (product) => {
    dispatch(removeFromCart());
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
              <th>Numder</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {shoppingsCart &&
              shoppingsCart.map((product, index) => (
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
                    <Counter addId={index} />
                  </td>
                  <td>
                    <label>{Counter}</label>
                  </td>
                  <td>
                    <button
                      onClick={() => removeHandle()}
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
              <th>Number of Items</th>
            </tr>
            <tr className="border-bottom">
              <th>{shoppingsCart.length}</th>
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
      <CustomerInfo />
    </>
  );
}

export default ShoppingList;
