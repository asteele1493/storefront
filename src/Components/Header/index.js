import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import categories from "../../store/categories/index";
import productSlice from "../../store/products";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Typography role="header" sx={{ display: "flex" }}>
        Store-o-matic
      </Typography>
      <Box sx={{ display: "flex" }}>
        {categories.map((category) => (
          <Button
            key={category.displayName}
            onClick={() => {
              dispatch(productSlice.actions.setActiveCategory(category.name));
            }}
          >
            {category.displayName}
          </Button>
        ))}
      </Box>
    </AppBar>
  );
};

export default Header;
