import React, { useState } from "react";
import {
  Booking,
  Heading,
  Payment,
  Text1,
  Container,
} from "./ConfirmBooking.styling";
import StripeCheckout from "react-stripe-checkout";

function ConfirmBooking() {
  function handleToken(token, addresses) {
    console.log({ token, addresses });
  }
  return (
    <Booking>
      <Heading>Payment Options</Heading>
      <Container>
        <Payment>
          <Text1>Card Payment</Text1>
          <StripeCheckout
            stripeKey="pk_test_51KuyaPSCQaVx7HBe8OxRf2sNJR6frOJUsRuVFJzPvui7Ni4icPjxO5u1YjNTWAwFtK9xxxQS03dMb6aetPKBxzSP004S3AwqfR"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={100} //*100 for converting from dollar to blaah
            name="Service Charge"
          />
          <br></br>
          <br></br>
          <Text1>G-Pay</Text1>
        </Payment>
      </Container>
    </Booking>
  );
}

export default ConfirmBooking;
