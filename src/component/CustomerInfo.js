import React,{useState} from "react";
import { Card } from "react-bootstrap";
import { addToInvoice } from './../redux/action/ProductAction';
import { useDispatch } from 'react-redux';
// import { ActionTypes } from './../redux/constants/action-types';
import { useNavigate } from "react-router-dom";

function CustomerInfo({ customerBuy }) {
  const navigate = useNavigate();

  const [valueON, setValueON] = useState("");
  const [valueDA, setValueDA] = useState("");
  const [valueFN, setValueFN] = useState("");
  const [valueLN, setValueLN] = useState("");
  const [valueEM, setValueEM] = useState("");
  const [valuePW, setValuePW] = useState("");

  // const [orderNo, setOrderNo] = useState("");
  // const [date, setDate] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log("OrderNo : ", valueON);
    // console.log("date : ", valueDA);
    // console.log("firsName : ", valueFN);
    // console.log("lastName : ", valueLN);
    // console.log("Email : ", valueEM);
    // console.log("password : ", valuePW);

   

    const customerData = {
      orderNo: valueON,
      date: valueDA,
      firstName: valueFN,
      lastName: valueLN,
      email: valueEM,
      password: valuePW,
      buy: customerBuy,
    };

    

    dispatch(addToInvoice(customerData));

    navigate("/");
  };

  return (
    <div className="CustomerInfo mt-2  text-start">
      <Card />
      <div className="CustomerInfo-content col-md-8 mt-3">
        <h3 className="text-info text-center"> Customer Information </h3>
        <Card />
        <form
          onSubmit={submitHandler}
          className="CustomerInfo flex-column fw-bold "
        >
          <div className="CustomerInfo-content d-flex mt-3">
            <div className="form-group d-flex col-md-6 me-2">
              <label htmlFor="orderNo" className="col-md-3">
                Order no.
              </label>
              <input
                name="orderNo"
                type="text"
                className="form-control"
                label="First name"
                onChange={(e) => {
                  const value = e.target.value;
                  setValueON(value);
                  // setOrderNo(value);
                }}
              />
            </div>
            <div className="form-group d-flex col-md-6">
              <label htmlFor="date" className="col-md-3 ms-2">
                Date
              </label>
              <input
                name="date"
                type="date"
                className="form-control"
                onChange={(e) => {
                  const value = e.target.value;
                  setValueDA(value);
                  // setDate(value);
                }}
              />
            </div>
          </div>
          <div className="CustomerInfo-content d-flex mt-3">
            <div className="form-group d-flex col-md-6 me-2">
              <label htmlFor="firstName" className="col-md-3">
                Firs Name
              </label>
              <input
                name="firstName"
                type="text"
                className="form-control"
                label="First name"
                onChange={(e) => {
                  const value = e.target.value;
                  setValueFN(value);
                  // setFirstName(value);
                }}
              />
            </div>
            <div className="form-group d-flex col-md-6">
              <label htmlFor="lastName" className="col-md-3 ms-2">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                className="form-control"
                onChange={(e) => {
                  const value = e.target.value;
                  setValueLN(value);
                  // setLastName(value);
                }}
              />
            </div>
          </div>
          <div className="form-group mt-3 mb-3 col-md-6">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              onChange={(e) => {
                const value = e.target.value;
                setValueEM(value);
                // setEmail(value);
              }}
            />
          </div>
          <div className="form-group mt-3 mb-3 col-md-6">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={(e) => {
                const value = e.target.value;
                setValuePW(value);
                // setPassword(value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary offset-md-3 col-md-6 mt-3 mb-3"
          >
            Buy
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerInfo;
