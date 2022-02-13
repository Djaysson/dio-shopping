import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core/";
import Cart from "./Cart";

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className="mt-3 mb-4"
      xs={12}
    >
      <Typography variant="h4">Dio Shopping</Typography>
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
      <Cart />
    </Grid>
  );
};

export default Header;
