import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropdown.styles.jsx";
import { useContext } from "react";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, setIsOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsOpen(false);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
