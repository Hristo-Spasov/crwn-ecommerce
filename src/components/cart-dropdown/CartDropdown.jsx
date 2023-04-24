import "./CartDropdown.scss";
import React from "react";
import Button from "../button/Button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
