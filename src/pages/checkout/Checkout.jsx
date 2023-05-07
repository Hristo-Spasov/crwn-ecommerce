import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.style.jsx";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.js";
import Payment from "../../components/payment-form/Payment.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          {" "}
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          {" "}
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          {" "}
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <Payment />
    </CheckoutContainer>
  );
};

export default Checkout;
