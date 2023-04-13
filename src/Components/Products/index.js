import  { CardHeader }  from "@mui/material";
import  Card  from "@mui/material/Card";
import  CardContent  from "@mui/material/CardContent";
import  Typography  from "@mui/material/Typography";
import React from 'react';
import { CardMedia } from "@mui/material";
import { useDispatch } from "react-redux";
import productSlice from "../../store/products";
import cartSlice from "../../store/cart";
import Button from "@mui/material/Button";

const Products = (product) => {
  const dispatch = useDispatch();
  return (
    <Card variant="outlined">
     <CardHeader title={product.product.name} subheader={product.product.category}/>
     <CardContent>
     <CardMedia 
     component="img"
     height="300"
     image={product.product.image}
     alt={product.product.name}
     />
        <Typography variant="body2">
          Price: ${product.product.price}
        </Typography>
        <Typography variant="body2">
          In stock: {product.product.inStock}
        </Typography>
        <Button onClick={() => {
          dispatch(productSlice.actions.decreaseStock(product.product.name));
          dispatch(cartSlice.actions.addToCart(product));
        }}
        >
          Add to cart
        </Button>
     </CardContent>
    </Card>
  );
};

export default Products;
