import { CartIconContainer, ItemCount, ShoppingIcon } from "./Cart.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsOpen } from "../../store/cart/cart.selector";
import { setIsOpen } from "../../store/cart/cart.action";

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
