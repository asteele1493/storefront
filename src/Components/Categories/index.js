import Products from "../Products";
import { filteredProducts } from "../../store/products";
import { useSelector } from "react-redux";
import  Grid  from "@mui/material/Grid";
import React from "react";

const Categories = () => {
  const products = useSelector(filteredProducts);
  return (
<>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((item) => (
          <Grid item xs={6} md={4} key={item.name}>
            <Products product={item} />
          </Grid>
        ))}
      </Grid>
</>
  );
};

export default Categories;
