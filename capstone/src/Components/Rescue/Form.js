import React from "react";
import "./Form.css";
// import { useForm } from 'react-hook-form';
// import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { addToRescue } from "../../features/rescueslice";
import { useDispatch, useSelector } from "react-redux";
function Form() {
  // const { rescueItems } = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const handleAddtoRescue = (formValues) => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(addToRescue(formValues));
      // setIsBooked(true);
    }
  };
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  // console.log(errors);
  // const navigate = useNavigate();
  // const submit = () => {
  // Object.keys(formErrors).length === 0 && isSubmit && navigate("/payment");
  // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
  // };
  const initialValues = {
    FirstName: "",
    LastName: "",
    email: "",
    ContactNo: "",
    Address: "",
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
      errors.FirstName = "Firstname is required!";
    }
    // else if{
    //   if (values.FirstName.length < 2 || values.FirstName.length > 10) {
    //     errors.FirstName = "The First name must be between 6 and 40 characters"
    // }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }
    if (!values.ContactNo) {
      errors.ContactNo = "Contact number is required!";
    }
    if (!values.Address) {
      errors.Address = "Address is required!";
    }
    if (!values.LastName) {
      errors.LastName = "Lastname is required!";
    }
    return errors;
  };
  return (
    <div className="contain">
      {/* <Text style={{ marginTop: "-25px", marginBottom: "15px" }}>
            BOOK YOUR SLOTS
          </Text> */}
      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>FirstName</label>
            <input
              type="text"
              name="FirstName"
              placeholder=" Enter your Firstname"
              value={formValues.FirstName}
              onChange={handleChange}
              style={{ marginLeft: "30px" }}
            />
            <p className="content">{formErrors.FirstName}</p>
          </div>

          <div className="field">
            <label>LastName</label>
            <input
              type="text"
              name="LastName"
              placeholder="Enter Your Lastname"
              value={formValues.LastName}
              onChange={handleChange}
              style={{ marginLeft: "34px" }}
            />
            <p className="content">{formErrors.LastName}</p>
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={formValues.email}
              onChange={handleChange}
              style={{ marginLeft: "70px" }}
            />
            <p className="content">{formErrors.email}</p>
          </div>
          <div className="field">
            <label>ContactNo</label>
            <input
              type="number"
              name="ContactNo"
              placeholder="Enter Your Contact Number"
              value={formValues.ContactNo}
              onChange={handleChange}
              style={{ marginLeft: "29px" }}
            />
            <p className="content">{formErrors.ContactNo}</p>
          </div>

          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="Address"
              placeholder="Enter Your Address"
              value={formValues.Address}
              onChange={handleChange}
              style={{ marginLeft: "48px" }}
            />
            <p className="content">{formErrors.Address}</p>
          </div>

          <button
            className="bttn"
            onClick={() => handleAddtoRescue(formValues)}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
const Text = styled.h2`
  justify-content: center;
  /* text-align: center; */
  /* justify-items: center; */
  /* align-items: center; */
`;
export default Form;
