import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.style.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
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
    </CheckoutContainer>
  );
};

export default Checkout;
