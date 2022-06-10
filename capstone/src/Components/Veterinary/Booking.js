import React from "react";
import {
  Container1,
  Container2,
  Container3,
  Container4,
  Form,
  MobileVet,
  Description,
  Image,
} from "./Booking.styling";
// import Veterinary from "./Veterinary";
// import { Services } from "./Data/Services";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Booking() {
  // const params = useParams();
  // const service = Veterinary.find((data) => data.id === params.id);
  const location = useLocation();
  const service = location.state;
  console.log("location", location);
  // console.log("params", params);
  return (
    <MobileVet>
      {/* {Services.map((data) => {
        return (
          <> */}
      <Image>
        <img src={service.image} alt="" />
      </Image>
      <Description>{service.Description}</Description>
      {/* </>
        );
      })} */}
      <Form>
        <Container1>
          Full Name:<input type="text"></input>
          <br></br>
          Email:<input></input>
        </Container1>
        <Container2>
          Contact No:<input type="number"></input>
        </Container2>
        <Container3>
          Address:<input></input>
        </Container3>
        <Container4>Google Location</Container4>
      </Form>
    </MobileVet>
  );
}

export default Booking;

// https://console.cloud.google.com/projectselector2/google/maps-apis/api-list?supportedpurview=project
