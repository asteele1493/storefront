import Products from "../Products";
import { filteredProducts } from "../../store/products";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import React from "react";

const Categories = () => {
  const products = useSelector(filteredProducts);
  return (
      <Grid container spacing={2} xs={3}>
        {products.map((category) => (
          <Grid key={category.id}>
            <Products product={category} />
          </Grid>
        ))}
      </Grid>
  );
};

export default Categories;
