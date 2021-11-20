// import Details from "./Details";
import { Card } from "react-bootstrap";
import CartApp from "./../component/CartApp";

function ShoppingList({ OnAddProduct, handleAddProduct }) {
  const shoppinCart = {
    list: [
      {
        id: 1,
        imageUrl: "hand.jpg",
        name: "Hand",
        price: 499,
        count: 1,
      },
      {
        id: 2,
        imageUrl: "Mountain.jpg",
        name: "Mountains",
        price: 499,
        count: 1,
      },
      {
        id: 3,
        imageUrl: "Heart.jpg",
        name: "Capture a moment",
        price: 499,
        count: 1,
      },
    ],
  };
  // handleAddProduct = (shoppingCartId) => {
  //   console.log("Event Handler Called", shoppingCartId);
  // };

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
            </tr>
          </thead>
          <tbody>
            {shoppinCart.list.map((product) => (
              <tr className="fs-5 ">
                <td className="col-2">
                  <img
                    className="w-100  rounded-circle"
                    src={process.env.PUBLIC_URL + `/images/${product.imageUrl}`}
                    alt="Coming Soon"
                  />
                </td>
                <td>
                  {" "}
                  <label>{product.name}</label>
                </td>
                <td>
                  <label>{product.price}</label>
                </td>
                <td>1</td>
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
              <th>xxxx</th>
            </tr>
            <tr>
              <th>Total Price</th>
            </tr>
            <tr>
              <th>XXXX</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default ShoppingList;
