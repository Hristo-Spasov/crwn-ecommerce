import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./CheckoutItem.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { resetCartItem, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

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
        <Arrow onClick={() => removeItemFromCart(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        {/* increment arrow */}
        <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
      </Quantity>
      {/* price */}
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={() => resetCartItem(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
