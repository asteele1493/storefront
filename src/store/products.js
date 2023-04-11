import { createSlice } from "@reduxjs/toolkit";

const PRODUCTS = [
  { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80" },
  { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, image: "https://images.unsplash.com/photo-1593078166039-c9878df5c520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
  { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" },
  { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, image: "https://images.unsplash.com/photo-1616531758364-731625b1f273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
  { name: 'Apples', category: 'food', price: .99, inStock: 500, image: "https://images.unsplash.com/photo-1602036907566-4070390a1075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" },
  { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, image: "https://images.unsplash.com/photo-1583927136633-7ecde5b23ac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
  { name: 'Bread', category: 'food', price: 2.39, inStock: 90, image: "https://images.unsplash.com/photo-1590301157172-7ba48dd1c2b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" },
];

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: PRODUCTS,
    activeCategory: undefined,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const filteredProducts = ({
  product: {activeCategory, products},
}) => 
  activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

export default productSlice;