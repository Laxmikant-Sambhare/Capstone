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
 <p>Please upload the image of Dog to be recued..</p>
      <Image>
        <img
          src="https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png"
          alt=""
        />
      </Image>
      {/* <button class="_abl- _abm2" type="button" tabindex="0"><div class="_abm0"><svg aria-label="New post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg></div></button> */}
      {/* <div class="_abm0"></div><svg aria-label="New post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg> */}
      {/* {/* <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line> */}

      {/* <a href="/accounts/register/?source=main_nav" class="button--2AOTE uploadButton--PbkQd mediumLarge--lJrSS primary--3Ox1d rounded--x-kje"><span class="icon--3u91i upload--2f6eM uploadIcon--1Tkqt"></span> Upload</a> */}
      {/* <span class="icon--3u91i upload--2f6eM uploadIcon--1Tkqt"></span> */}
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
