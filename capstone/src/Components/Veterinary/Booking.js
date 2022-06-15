import React from "react";
// import useForm from "./useForm";
import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Form,
  MobileVet,
  Description,
  Image,
  Button,
} from "./Booking.styling";
import { Services } from "./Data/Services";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Booking() {
  const params = useParams();
  const service = Services.find((item) => item.id == params.id);
  // console.log("params", params);
  const navigate = useNavigate();
  const submit = () => {
    navigate("/ConfirmBooking");
  };
  // const { handleChange, values } = useForm();
  const initialValues = {
    FirstName: "",
    LastName: "",
    ContactNo: "",
    email: "",
    Address: "",
  };
  // const [formErrors, setFormErrors] = useState({});
  // const [formValues, setFormvalues] = useState(initialValues);
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormvalues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
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
      errors.FirstName = "first name is required";
    }
    if (!values.LastName) {
      errors.LastName = "last name is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    }
    if (!values.Address) {
      errors.Address = "Address is required";
    }
    if (!values.ContactNo) {
      errors.ContactNo = "Contact no is required";
    }
    return errors;
  };
  return (
    <MobileVet>
      <div style={{ fontSize: "20px", textAlign: "center", marginTop: "3%" }}>
        <b>{service.service}</b>
      </div>
      <Image>
        <img src={service.image} alt="" />
      </Image>
      <Description>{service.Description}</Description>
      <Form>
        <h1 style={{ textAlign: "center", marginBottom: "5%" }}>
          BOOK YOUR SLOTS
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        </h1>
        <Container1 onSubmit={handleSubmit}>
          First Name:
          <input
            type="text"
            name="FirstName"
            style={{ marginLeft: "3%" }}
            value={formValues.FirstName}
            onChange={handleChange}
          ></input>
          Last Name:
          <input
            type="text"
            name="LastName"
            value={formValues.LastName}
            onChange={handleChange}
          ></input>
        </Container1>
        <p>{formErrors.FirstName}</p>
        <p>{formErrors.LastName}</p>
        <Container2>
          Contact No:
          <input
            type="number"
            name="ContactNo"
            value={formValues.ContactNo}
            onChange={handleChange}
          ></input>
          Email
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          ></input>
        </Container2>
        <p>{formErrors.email}</p>
        <p>{formErrors.ContactNo}</p>
        <Container3>
          Address:
          <input
            value={formValues.Address}
            onChange={handleChange}
            type="text"
            name="Address"
          ></input>
          Google Location(Pending)
        </Container3>
        <p>{formErrors.Address}</p>
        <Container4>
          Slots-Available
          <select>
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
        </Container4>
        <Container5>
          T & C* <br></br>A payment of X will be charged from the user as
          service charge. This amount will not be refunded under any
          circumstances.
        </Container5>
        <Button onClick={submit}>Book your slot</Button>
      </Form>
    </MobileVet>
    // <MobileVet>
    //   <div style={{ fontSize: "20px", textAlign: "center", marginTop: "3%" }}>
    //     <b>{service.service}</b>
    //   </div>
    //   <Image>
    //     <img src={service.image} alt="" />
    //   </Image>
    //   <Description>{service.Description}</Description>
    //   <div className="container">
    //     {Object.keys(formErrors).length === 0 && isSubmit ? (
    //       <div className="ui message success">Signed in successfully</div>
    //     ) : (
    //       <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    //     )}

    //     <form onSubmit={handleSubmit}>
    //       <div className="ui divider"></div>
    //       <div className="ui form">
    //         <div className="field">
    //           <label>Firstname</label>
    //           <input
    //             type="text"
    //             name="Firstname"
    //             placeholder="Enter your first name"
    //             value={formValues.FirstName}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <p>{formErrors.FirstName}</p>
    //         <div className="field">
    //           <label>LastName</label>
    //           <input
    //             type="text"
    //             name="LastName"
    //             placeholder="Enter youtr last name"
    //             value={formValues.LastName}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <p>{formErrors.LastName}</p>
    //         <div className="field">
    //           <label>Email</label>
    //           <input
    //             type="text"
    //             name="email"
    //             placeholder="Enter your email"
    //             value={formValues.email}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <p>{formErrors.email}</p>
    //         <div className="field">
    //           <label>Contact No</label>
    //           <input
    //             type="text"
    //             name="ContactNo"
    //             placeholder="Enter your contact number"
    //             value={formValues.ContactNo}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="field">
    //           <label>Address</label>
    //           <input
    //             type="text"
    //             name="Address"
    //             placeholder="Enter your Address"
    //             value={formValues.Address}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <button className="fluid ui button blue">Submit</button>
    //       </div>
    //     </form>
    //   </div>
    // </MobileVet>
    //  <div className="form-content-right">
    //    <form className="form">
    //      <h1>hgvbjk</h1>
    //      <div className="form-inputs">
    //        <label className="form-label" htmlFor="Fullname">
    //          Fullname
    //        </label>
    //        <input
    //           id="Fullname"
    //           type="text"
    //           name="Fullname"
    //           placeholder="Enter your Fullname"
    //           className="form-input"
    //           value={values.Fullname}
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="form-inputs">
    //         <label className="form-label" htmlFor="email">
    //           Email
    //         </label>
    //         <input
    //           id="email"
    //           type="email"
    //           name="Email"
    //           placeholder="Enter your email"
    //           className="form-input"
    //           value={values.Email}
    //           onChange={handleChange}
    //         />
    //       </div>

    //       <div className="form-inputs">
    //         <label className="form-label" htmlFor="contactNo">
    //           ContactNo
    //         </label>
    //         <input
    //           id="contactNo"
    //           type="number"
    //           name="contactNo"
    //           placeholder="Enter your contact No"
    //           className="form-input"
    //           value={values.ContactNo}
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="form-inputs">
    //         <label className="form-label" htmlFor="Address">
    //           Address
    //         </label>
    //         <input
    //           id="Address"
    //           type="Address"
    //           name="Address"
    //           placeholder="Enter your Address"
    //           className="form-input"
    //           value={values.Address}
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="form-inputs">
    //         <label className="form-label" htmlFor="location">
    //           Google location(pending)
    //         </label>
    //       </div>
    //       <div className="form-inputs">
    //         <label className="form-label" htmlFor="slots">
    //           Slots-Available
    //         </label>

    //         <select>
    //           <option value="">None</option>
    //           <option value="12am-2am">12am-2am</option>
    //           <option value="2am-4am">2am-4am</option>
    //           <option value="4am-6am">4am-6am</option>
    //           <option value="6am-8am">6am-8am</option>
    //           <option value="8am-10am">8am-10am</option>
    //           <option value="10am-12pm">10am-12pm</option>
    //           <option value="12pm-2pm">12pm-2pm</option>
    //           <option value="2pm-4pm">2pm-4pm</option>
    //           <option value="4pm-6pm">4pm-6pm</option>
    //           <option value="6pm-8pm">6pm-8pm</option>
    //           <option value="8pm-10pm">8pm-10pm</option>
    //           <option value="10pm-12am">10pm-12am</option>
    //         </select>
    //       </div>
    //       <button className="form-input-btn">Confirm Booking</button>
    //     </form>
    //   </div>
    // </MobileVet>
  );
}

export default Booking;
