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

const Header = () => {
  const dispatch = useDispatch();
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
          </Box>
      
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
