import React from "react";
import { AppBar, Typography } from "@mui/material";

const Header: React.FC = () => (
  <AppBar position="static">
    <Typography variant="h5" className="header">
      Embla Carousel Auto Scroll React
    </Typography>
  </AppBar>
);

export default Header;
