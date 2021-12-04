 
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
function MyPage() {
  const customer = useSelector((state) => state.invoice);

  const shoppingCart = useSelector((state) => state.invoice.buy);

  const productsPrice = shoppingCart.reduce(
    (a, c) => parseInt(a) + parseInt(c.price),
    0
  );

  if (!shoppingCart || shoppingCart.length < 0) {
    return <h1> The Page Is Empty.</h1>;
  }

  return (
    <div className="Invoice">
      <div className="Invoice-content">
        <h3> My Page </h3>
        <Card />
        <div className=" text-start text-info mt-3">
          <p>
            <span className="text-dark fw-bold">Name:</span>{" "}
            {customer.firstName} {customer.lastName}
          </p>
          <p>
            <span className="text-dark fw-bold">Email: </span>
            {customer.email}
          </p>
        </div>
      </div>
      <h3 className="text-danger">Orders</h3>

      <table className="table col-md-10 mt-2">
        <thead className="table-dark">
          <tr className="fs-5 border-bottom">
            <th>Oreder No.</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr className="fs-5 border-bottom ">
            <td>
              <label>{customer.orderNo}</label>
            </td>
            <td>
              <label>{customer.date}</label>
            </td>
            <td>
              <label>{shoppingCart.length}</label>
            </td>
            <td>
              <label>{productsPrice}</label>
            </td>
          </tr>
        </tbody>
      </table>

      <p className=" fst-italic fs-4 fw-bold text-warning mt-3 mb-3">
        Thanks for shopping !
      </p>
    </div>
  );
}
 
export default MyPage;