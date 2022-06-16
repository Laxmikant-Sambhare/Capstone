import {
  Booking,
  Heading,
  Payment,
  Text1,
  Container,
} from "./ConfirmBooking.styling";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";

function ConfirmBooking() {
  function handleToken(token, addresses) {
    console.log({ token, addresses });
  }
  const {cartTotalAmount} = useSelector((state) => state.cart);
  const {cartItems} = useSelector((state) => state.cart);


  return (
    <Booking>
      <Heading>Payment Options</Heading>
      <img src={cartItems.imageurl} alt={cartItems.name} />
      <Text1>{cartItems.name}</Text1>

      <Text1>Total: {cartTotalAmount}</Text1>
      <Container>
        <Payment>
          <Text1>Card Payment</Text1>
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
          <Text1>G-Pay</Text1>

        </Payment>
      </Container>
    </Booking>
  );
}

export default ConfirmBooking;
