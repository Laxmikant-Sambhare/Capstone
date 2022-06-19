import React from "react";
import "./Styling.css";
import { Text1, Form, HeadingTag } from "./Styling";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTOBookings } from "../../features/bookingslice";
function ConfirmBooking() {
  // console.log("params", params);
  // const navigate = useNavigate();
  // const submit = () => {
  //   Object.keys(formErrors).length === 0 && isSubmit && navigate("/payment");
  //   // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
  // };
  const location = useLocation();
  const Bookingdata = location.state;
  const dispatch =  useDispatch();
  
  const handleAddtoBookings = (formValues) => {
    dispatch(addTOBookings(formValues));
  }

  const initialValues = {
    FirstName: "",
    LastName: "",
    email: "",
    ContactNo: "",
    Address: "",
    slots: "",
    Service: `${Bookingdata.service}`,
    Image: `${Bookingdata.image1}`,
    price: `${Bookingdata.price}`,

  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.FirstName) {
      errors.FirstName = "First name is required!";
    } else if (values.FirstName.length < 2 || values.FirstName.length > 10) {
      errors.FirstName = "The First name must be between 6 and 40 characters";
    }
    if (!values.LastName) {
      errors.LastName = "Last name is required!";
    } else if (values.LastName.length < 2 || values.LastName.length > 20) {
      errors.LastName = "The last name must be between 2 and 20 characters";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }
    if (!values.ContactNo) {
      errors.ContactNo = "Contact number is required!";
    } else if (values.ContactNo.length < 10 || values.ContactNo.length > 10) {
      errors.ContactNo = "Contact no should have 10 digits";
    }
    if (!values.Address) {
      errors.Address = "Address is required!";
    } else if (values.Address.length < 20 || values.Address.length > 100) {
      errors.Address = "The Address must be between 20 to 100 characters.";
    }

    return errors;
  };
  return (
    <div style={{ marginBottom: "100px" }} className="BackgroundImage">
      <Form className="form">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="ui divider"></div>
            <div className="ui form">
              <div style={{ backgroundColor: "#ffd301" }}>
                <img
                  src={require("./complete-small.jpg")}
                  alt="logo"
                  className="Mainname"
                  style={{ height: "5rem", padding: "2px" }}
                />
                <Text1
                  style={{
                    marginTop: "-35px",
                    marginBottom: "15px",
                    marginLeft: "60px",
                  }}
                >
                  BOOK YOUR SLOTS
                </Text1>
              </div>
              <div className="fields">
                <label>FirstName</label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder=" Enter your Firstname"
                  value={formValues.FirstName}
                  onChange={handleChange}
                  style={{ marginLeft: "30px" }}
                />
                <p className="para">{formErrors.FirstName}</p>
              </div>

              <div className="fields">
                <label>LastName</label>
                <input
                  type="text"
                  name="LastName"
                  placeholder="Enter Your Lastname"
                  value={formValues.LastName}
                  onChange={handleChange}
                  style={{ marginLeft: "34px" }}
                />
                <p className="para">{formErrors.LastName}</p>
              </div>

              <div className="fields">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formValues.email}
                  onChange={handleChange}
                  style={{ marginLeft: "70px" }}
                />
                <p className="para">{formErrors.email}</p>
              </div>
              <div className="fields">
                <label>ContactNo</label>
                <input
                  type="string"
                  name="ContactNo"
                  placeholder="Enter Your Contact Number"
                  value={formValues.ContactNo}
                  onChange={handleChange}
                  style={{ marginLeft: "29px" }}
                />
                <p className="para">{formErrors.ContactNo}</p>
              </div>

              <div className="fields">
                <label>Address</label>
                <input
                  type="text"
                  name="Address"
                  placeholder="Enter Your Address"
                  value={formValues.Address}
                  onChange={handleChange}
                  style={{ marginLeft: "48px" }}
                />
                <p className="para">{formErrors.Address}</p>
              </div>

              <div className="fields">
                <label>Slots Available</label>
                <select 
                  name="slots"
                  onChange={handleChange}
                  value={formValues.slots}
                >
                  <option value="">None</option>
                  <option value="12am-2am">12am-2am</option>
                  <option value="2am-4am">2am-4am</option>
                  <option value="4am-6am">4am-6am</option>
                  <option value="6am-8am">6am-8am</option>
                  <option value="8am-10am">8am-10am</option>
                  <option value="10am-12pm">10am-12pm</option>
                  <option value="12pm-2pm">12pm-2pm</option>
                  <option value="2pm-4pm">2pm-4pm</option>
                  <option value="4pm-6pm">4pm-6pm</option>
                  <option value="6pm-8pm">6pm-8pm</option>
                  <option value="8pm-10pm">8pm-10pm</option>
                  <option value="10pm-12am">10pm-12am</option>
                </select>
              </div>
              <p style={{ fontSize: "15px" }}>
                T & C* <br></br>A service charge of X will be charged from the
                user. This amount will not be refunded under any circumstances.
              </p>
                  <button className="Submit" onClick={() => handleAddtoBookings(formValues)}>Book Your Slots</button>
            </div>
            <Link to={'/payment'} state={Bookingdata}>
            <button className="Paymentbtn" style={{ backgroundColor: "red" }}>
              Continue To Payment
            </button>
            </Link>
          </form>
        </div>
      </Form>
    </div>
  );
}

export default ConfirmBooking;
