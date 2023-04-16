import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../store/products";
import * as React from "react";
import List from "@mui/material/List";
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
    <>
      <List
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ border: "1px dashed grey" }}>
          {!cart.inCart.length && <Typography>No items in cart!</Typography>}
          <div>
            <ListItem key={}</Typography>
            <ListItem component="h4">${product.price}</Typography>
          </div>
        </Box>
      </List>
    </>
  );
};

export default SimpleCart;
