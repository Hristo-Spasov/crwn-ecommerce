import {
  FormContainer,
  PaymentFormContainer,
  PaymentButton,
} from "./Payment.styles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPES_CLASSES } from "../button/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser);
  const [isProccessingPayment, setIsProccessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProccessingPayment(true);
    const response = await fetch("/.netlify/functions/stripe-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user ? user.displayName : "Guest",
        },
      },
    });

    setIsProccessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProccessingPayment}
          buttonType={BUTTON_TYPES_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default Payment;
