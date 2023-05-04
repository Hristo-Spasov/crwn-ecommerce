import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./CheckoutItem.styles.jsx";
import { useDispatch } from "react-redux";
import {
  resetCartItem,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer.js";

const CheckoutItem = ({ cartItem }) => {
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
        <Arrow onClick={() => dispatch(removeItemFromCart(cartItem))}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        {/* increment arrow */}
        <Arrow onClick={() => dispatch(addItemToCart(cartItem))}>
          &#10095;
        </Arrow>
      </Quantity>
      {/* price */}
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={() => dispatch(resetCartItem(cartItem))}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
