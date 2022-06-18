import {
  Bookings,
  HeadingTag,
  PaymentContainer,
  Text,
  Containers,
} from "./Payment.styling";

import StripeCheckout from "react-stripe-checkout";

import { useSelector } from "react-redux";

function ConfirmBooking() {
  function handleToken(token, addresses) {
    console.log({ token, addresses });
  }

  const { cartTotalAmount } = useSelector((state) => state.cart);

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Bookings>
      <HeadingTag>Payment Options</HeadingTag>
      <img src={cartItems.imageurl} alt={cartItems.name} />
      <Text>{cartItems.name}</Text>

      <Text>Total: {cartTotalAmount}</Text>
      <Containers>
        <PaymentContainer>
          <Text>Card Payment</Text>
          <StripeCheckout
            stripeKey="pk_test_51KuyaPSCQaVx7HBe8OxRf2sNJR6frOJUsRuVFJzPvui7Ni4icPjxO5u1YjNTWAwFtK9xxxQS03dMb6aetPKBxzSP004S3AwqfR"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={cartTotalAmount} //*100 for converting from dollar to blaah
            name="Service Charge"
          />
          <br></br>
          <br></br>
          <Text>G-Pay</Text>
        </PaymentContainer>
      </Containers>
    </Bookings>
  );
}

export default ConfirmBooking;
