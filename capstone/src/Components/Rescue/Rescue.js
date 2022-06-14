import React from "react";

import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Image,
  Form,
  Header,
} from "./Rescue.styling";

function Rescue() {
  return (
    <>
      <Header>Rescue Panel</Header>
      <Image>
        <img
          src="https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png"
          alt=""
        />
      </Image>

      <Form>
        <Container1>
          Full Name:<input placeholder="Full Name"></input>
          <br></br>
        </Container1>
        <Container2>
          Contact No:<input placeholder="Contact No"></input>
        </Container2>
        <Container3>
          Address:<input placeholder="Address"></input>
        </Container3>
        <Container4>
          Email:<input placeholder="Email"></input>
        </Container4>
        <Container5>Share Current Location</Container5>
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
