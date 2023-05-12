import { CartItem } from "./cart.types";
import { AnyAction } from "redux";
import { setIsOpen, setCartItems } from "./cart.action";

export type CartState = {
  readonly isOpen: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsOpen.match(action)) {
    return {
      ...state,
      isOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
