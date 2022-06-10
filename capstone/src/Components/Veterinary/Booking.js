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
import { Services } from "./Data/Services";
import { useParams } from "react-router-dom";
function Booking() {
  const params = useParams();
  const service = Services.find((item) => item.id == params.id);
  console.log("params", params);
  return (
    <MobileVet>
      <Image>
        <img src={service.image} alt="" />
      </Image>
      <Description>{service.Description}</Description>
      <Form>
        <Container1>
          Full Name:<input type="text" style={{ marginLeft: "6%" }}></input>
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
