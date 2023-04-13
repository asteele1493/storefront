import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import categories from "../../store/categories/index";
import productSlice from "../../store/products";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SimpleCart from "../SimpleCart";

//TODO: When category is selected, identify that category
//show list of items with that category id.
//Add add to cart button to each item

const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const items = useSelector((state) => { return state.cart });

  return (
    <Box>
      <AppBar position="static">
      <Typography variant="h3" sx={{ display: "flex" }} fontFamily ='Arial'>
            Store-o-matic
          </Typography>
        <Toolbar sx={{ justifyContent: "flex-start" }}>
          <Box>
            {categories.map((category) => (
              <Button variant="h3" key={category.displayName}  
              onClick={() => {dispatch(productSlice.actions.setActiveCategory(category.name))}}>
                {category.displayName}
              </Button>
            ))}
                <ShoppingCartIcon />
                <Button
                onClick = {handleOpen}
                >Shopping Cart ({items.numCart})</Button>
                <SimpleCart 
                handleOpen = {handleOpen}
                handleClose = {handleClose}
                open = {open}
                />
          </Box>
      
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
