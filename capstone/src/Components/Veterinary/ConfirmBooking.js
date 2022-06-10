import React from "react";
import { Booking, Heading, Payment, Text1 } from "./ConfirmBooking.styling";
function ConfirmBooking() {
  return (
    <Booking>
      <Heading>Payment Options</Heading>
      <Payment>
        <Text1>Card</Text1>
        <Text1>G-pay</Text1>
      </Payment>
    </Booking>
  );
}

export default ConfirmBooking;
