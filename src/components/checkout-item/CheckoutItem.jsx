import "./CheckoutItem.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { resetCartItem, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      {/* Image section */}
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      {/* Quantity section */}
      <span className="quantity">
        {/* decrement arrow */}
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        {/* increment arrow */}
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      {/* price */}
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => resetCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
