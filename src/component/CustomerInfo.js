import { Card } from "react-bootstrap";
function CustomerInfo() {

  const submitHandler = (e) => {
    e.preventDefault();
    // const application = { ...formFields };

    // fetch("http://localhost:4000/api/shopping", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(application)
    // }).then(resp => {
        
    //   console.log(application);

    //   alert("Thanks for shooping.");

    //   setFormFields({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     Password: ""
    //   });
    // });
  }

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
              <label htmlFor="username" className="col-md-3">
                Firs Name
              </label>
              <input id="username" type="text" className="form-control" />{" "}
            </div>
            <div className="form-group d-flex col-md-6">
              <label htmlFor="password" className="col-md-3 ms-2">
                Last Name
              </label>
              <input id="password" type="text" className="form-control" />{" "}
            </div>
          </div>
          <div className="form-group mt-3 mb-3">
            <label htmlFor="username">Email</label>
            <input id="username" type="text" className="form-control" />{" "}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />{" "}
          </div>
          <button type="submit" className="btn btn-primary col-md-6 mt-3 mb-3">
            Buy
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerInfo;
