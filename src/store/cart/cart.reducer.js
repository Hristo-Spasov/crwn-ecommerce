import { createSlice } from "@reduxjs/toolkit";

//! HELPER FUNCS

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


//! REDUCER

export const CART_INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
};


export const cartSlice = createSlice({
  name:'cart',
  initialState:CART_INITIAL_STATE,
  reducers:{
    setIsOpen(state,action){
      state.isOpen = action.payload
    },
    addItemToCart(state,action){
      state.cartItems = addCartItem(state.cartItems,action.payload)
    },
    removeItemFromCart(state,action){
      state.cartItems= removeCartItem(state.cartItems,action.payload)
    },
    resetCartItem(state,action){
      state.cartItems=removeItemFromCheckout(state.cartItems,action.payload)
    }
  }
})


export const {setIsOpen,addItemToCart,removeItemFromCart,resetCartItem} = cartSlice.actions

export const cartReducer = cartSlice.reducer