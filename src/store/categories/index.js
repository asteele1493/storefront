import { createSlice } from "@reduxjs/toolkit";

const categories = [
  { name: 'electronics', displayName: 'Electronics', _id: 1 },
  { name: 'food', displayName: 'Food', _id: 2 },
]

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: categories,
    selectedCategory: undefined,
  },
  reducers: {
    showCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const chooseCategory = ({ category: { categories, selectedCategory } }) =>
  categories ? categories.filter((category) => category.name === category) : categories;

export default categorySlice;