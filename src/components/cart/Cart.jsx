import "./Cart.scss";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsOpen(!isOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
