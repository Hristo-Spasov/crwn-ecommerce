import { ItemDetailes, Name, CartItemContainer } from "./CartItem.styles";
import { FC } from "react";
import { CartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: CartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
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
