import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    inCart: [],
    numCart: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.numCart++;
      state.inCart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      //logic for removing items w/ help from Stacy
      const index = state.inCart.indexOf(action.payload);
      state.inCart.splice(index, 1);
      state.numCart--;
    },
    },
  },
);

export default cartSlice;