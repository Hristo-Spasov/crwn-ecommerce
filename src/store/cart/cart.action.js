import { CART_ACTION_TYPES } from "./cart.types";
import {createAction} from '../../utils/reducer/createaction'




export const setIsOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_OPEN,bool);




    // Add item to the Cart
const addCartItem = (cartItems, productToAdd) => {
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
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// Remove item with remove button
const removeItemFromCheckout = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}


    // adding product to cart
  export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CURRENT_ITEM,newCartItems);
  };
  // Removing item by decrement
  export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CURRENT_ITEM,newCartItems);
  };
  // Remove product with remove button
  export const resetCartItem = (cartItems,cartItemToClear) => {
    const newCartItems = removeItemFromCheckout(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CURRENT_ITEM,newCartItems);
  };




