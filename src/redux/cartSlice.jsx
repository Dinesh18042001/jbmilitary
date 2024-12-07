import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [], 
  },
  reducers: {
    addtoCart: (state, action) => {
      // Add the product to the cart
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // Remove the product by filtering out the matching `id`
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer; 
export const { addtoCart, removeFromCart } = cartSlice.actions;

