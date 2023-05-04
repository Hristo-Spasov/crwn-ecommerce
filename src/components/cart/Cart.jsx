import { CartIconContainer, ItemCount, ShoppingIcon } from "./Cart.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsOpen,
} from "../../store/cart/cart.selector.js";
import { setIsOpen } from "../../store/cart/cart.reducer.js";

const Cart = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isOpen = useSelector(selectIsOpen);

  const toggleIsCartOpen = () => dispatch(setIsOpen(!isOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default Cart;
