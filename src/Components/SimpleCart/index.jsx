import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../store/products";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
// //TODO: make new state in store for cart?
// //TODO: need button to trigger menu that will hold list of items in cart, delete button
// //TODO: will need to change number in header attached to cart icon.

const SimpleCart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  return (
    <div>
      {cart.inCart.map((product) => (
        <>
          <Button onClick={() => dispatch(productSlice.actions.increaseStock(product.name))}>View Cart</Button>
          <Drawer
            item={product}
            open={product.open}
            onClose={product.onClose}
          >
            <Box>
              {!cart.inCart.length && (
                <Typography>
                  No items in cart!
                </Typography>
              )}
              <div>
                <Typography component="h3">
                  {product.name}
                </Typography>
                <Typography component="h4">
                  ${product.price}
                </Typography>
              </div>
            </Box>
          </Drawer>
        </>
      ))}
    </div>
  );
};

export default SimpleCart;
