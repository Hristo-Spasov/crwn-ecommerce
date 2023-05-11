import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import {
  createAction,
  withMatcher,
  ActionNoPayload,
  ActionWithPayload,
} from "../../utils/reducer/createaction";
import { CategoryItem } from "../categories/category.types";

export type SetIsOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_OPEN,
  boolean
>;

export const setIsOpen = withMatcher(
  (boolean: boolean): SetIsOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_OPEN, boolean)
);

// Add item to the Cart
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Remove item by decrement
const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// Remove item with remove button
const removeItemFromCheckout = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

//Action types

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CURRENT_ITEM,
  CartItem[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CURRENT_ITEM, cartItems)
);

// adding product to cart
export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
// Removing item by decrement
export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};
// Remove product with remove button
export const resetCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
) => {
  const newCartItems = removeItemFromCheckout(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
