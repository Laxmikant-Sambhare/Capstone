import React from "react";
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
function Booking() {
  const params = useParams();
  const service = Services.find((item) => item.id == params.id);
  console.log("params", params);
  const navigate = useNavigate();
  const submit = () => {
    navigate("/ConfirmBooking");
  };

  return (
    <MobileVet>
      <Image>
        <img src={service.image} alt="" />
      </Image>
      <Description>{service.Description}</Description>
      <Form>
        <Container1>
          First Name:<input type="text" style={{ marginLeft: "3%" }}></input>
          Last Name:<input type="text"></input>
        </Container1>
        <Container2>
          Contact No:<input></input>
          Email:<input></input>
        </Container2>
        <Container3>
          Address:<input></input>
          Google Location(Pending)
        </Container3>
        <Container4>
          Slots-Available
          <select>
            <option value="">
              <em>None</em>
            </option>
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
  );
}

export default Booking;

// https://console.cloud.google.com/projectselector2/google/maps-apis/api-list?supportedpurview=project
