import React from "react";
import {
  Container1,
  Container2,
  Container3,
  Container4,
  Form,
  MobileVet,
  Description,
  Header,
  Image,
} from "./Booking.styling";

// import { Services } from "../../Data/Services";
function Booking() {
  return (
    <MobileVet>
      <Header>Header</Header>
      <Image>
        <img
          src="https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png"
          alt=""
        />
      </Image>
      <Description></Description>
      <Form>
        <Container1>
          Full Name:<input placeholder="Full Name"></input>
          <br></br>
          Email:<input placeholder="Email"></input>
        </Container1>
        <Container2>
          Contact No:<input placeholder="Contact No"></input>
        </Container2>
        <Container3>
          Address:<input placeholder="Address"></input>
        </Container3>
        <Container4>Google Location</Container4>
      </Form>
    </MobileVet>
  );
}

export default Booking;
