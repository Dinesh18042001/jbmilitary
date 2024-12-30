import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [], 
  },
  reducers: {
    addToWishlist: (state, action) => {
      // Add the product to the wishlist if it's not already present
      const exists = state.wishlist.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      // Remove the product by filtering out the matching `id`
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
    },
  },
});

export default wishlistSlice.reducer; 
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
