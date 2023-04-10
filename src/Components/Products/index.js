import  { CardHeader }  from "@mui/material";
import  Card  from "@mui/material/Card";
import  CardContent  from "@mui/material/CardContent";
import  Typography  from "@mui/material/Typography";
import React from 'react';

const Products = (product) => {
  return (
    <Card variant="outlined">
     <CardHeader title={product.name} subheader={product.category}/>
     <CardContent>
        <Typography variant="body2">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2">
          In stock: {product.inStock}
        </Typography>
     </CardContent>
    </Card>
  );
};

export default Products;
