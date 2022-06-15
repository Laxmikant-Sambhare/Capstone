import React from "react";

import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Image,
  Button,
  Form,
  Header,
} from "./Rescue.styling";
function Rescue(){
  return (
    <>
      <Header>Rescue Panel</Header>
      <Image>
        <img
          src="https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png"
          alt=""
        />
      </Image><br></br>
      <div id="para2"><p2><b>Please upload the image of dog here..</b></p2></div>
        <Form>
          <Container1>
            <b>Full Name :</b>
            <input placeholder="Full Name"></input>
            <br></br>
          </Container1>
          <Container2>
            <b>Contact No :</b>
            <input placeholder="Contact No"></input>
          </Container2>
          <Container3>
            <b>Address :</b>
            <input placeholder="Address"></input>
          </Container3>
          <Container4>
            <b> Email :</b>
            <input placeholder="Email"></input>
          </Container4>
          <Container5>
            <b>Share Current Location :</b>
          </Container5>
          <Button>
            <b>SUBMIT</b>
          </Button>
        </Form>
    </>
  );
  }
export default Rescue;

// import React, { useState } from "react";
// import axios from "axios";

// function Rescue() {
//   const [file, setFile] = useState();

//   function handleChange(event) {
//     setFile(event.target.files[0]);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const url = "http://localhost:3000/uploadFile";
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("fileName", file.name);
//     const config = {
//       headers: {
//         "content-type": "multipart/form-data",
//       },
//     };
//     axios.post(url, formData, config).then((response) => {
//       console.log(response.data);
//     });
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <h1>React File Upload</h1>
//         <input type="file" onChange={handleChange} />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

// export default Rescue;
