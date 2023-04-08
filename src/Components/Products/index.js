import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from 'react';

const Products = ({ product }) => {
  return (
    
    <Card>
      <CardContent>
        <Typography mt={2} component="div">
           {product.name}
        </Typography>
        <Typography>
          <p>Price is ${product.price}</p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Products;
