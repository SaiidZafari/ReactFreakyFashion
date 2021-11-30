import React,{useState, useEffect} from "react";
import { Card } from "react-bootstrap";


  const Input = ({ label, onChange }) => {
    const [value, setValue] = useState("");

    return (
      <div className="form-group d-flex col-md-6 me-2">
        <label htmlFor="username" className="col-md-3">
          {label}
        </label>
        <input
          id="username"
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => {
            const value = e.target.value;
            setValue(value);
            onChange(value);
          }}
        />
      </div>
    );
};
  
function CustomerInfo() {

  const submitHandler = (e) => {
    e.preventDefault();
   // const application = { ...formFields };

  //  const [formFields, setFormFields] = useState ({
  //    firstName: "",
  //    lastName: "",
  //    email: "",
  //    password: "",
  //  });

  //  const [programs, setPrograms] = useState([]);

  //  useEffect(() => {
  //    async function fetchData() {
  //      const response = await fetch("http://localhost:5000/api/programs");

  //      const programs = await response.json();

  //      setPrograms(programs);
  //    }

  //    fetchData();

  //    // Alternativt, utan async/await
  //    // fetch("http://localhost:5000/api/programs")
  //    //   .then(resp => resp.json())
  //    //   .then(programs => setPrograms(programs));
  //  }, []);

  //  const handleSubmit = (event) => {
  //    event.preventDefault();

  //    const application = { ...formFields };

  //    fetch("http://localhost:5000/api/applications", {
  //      method: "post",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify(application),
  //    }).then((resp) => {
  //      console.log(application);

  //      alert("Tack för ansökan, vi kommer kontakta dig");

  //      setFormFields({
        
  //        firstName: "",
  //        lastName: "",
  //        email: "",
  //        password: "",
  //      });
  //    });
  //  };
  }

  const [firstName, setFirstName] = useState("");
  // const [lasstName, setLastName] = useState("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");


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
            <Input
              label="First name"
              onChange={(value) => setFirstName(value)}
            />
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
            <input
              id="password"
              type="password"
              className="form-control"
            />{" "}
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
