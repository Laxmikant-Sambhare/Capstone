import {
  Bookings,
  HeadingTag,
  PaymentContainer,
  Text2,
  Containers,
} from "./Styling";

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
      <Text2>{cartItems.name}</Text2>

      <Text2>Total: {cartTotalAmount}</Text2>
      <Containers>
        <PaymentContainer>
          <Text2>Card Payment</Text2>
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
          <Text2>G-Pay</Text2>
        </PaymentContainer>
      </Containers>
    </Bookings>
  );
}

export default ConfirmBooking;
