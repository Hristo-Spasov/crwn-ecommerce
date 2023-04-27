import { ItemDetailes, Name, CartItemContainer } from "./CartItem.styles.jsx";

import React from "react";

const CartItem = ({ cartItem }) => {
  const { price, name, quantity, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetailes>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailes>
    </CartItemContainer>
  );
};

export default CartItem;
