import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./CheckoutItem.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCartItem,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      {/* Image section */}
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      {/* Quantity section */}
      <Quantity>
        {/* decrement arrow */}
        <Arrow
          onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
        >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        {/* increment arrow */}
        <Arrow onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
          &#10095;
        </Arrow>
      </Quantity>
      {/* price */}
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton
        onClick={() => dispatch(resetCartItem(cartItems, cartItem))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
