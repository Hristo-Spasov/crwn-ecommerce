import { CartIconContainer, ItemCount, ShoppingIcon } from "./Cart.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsOpen(!isOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default Cart;
