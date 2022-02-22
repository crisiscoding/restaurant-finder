import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          My Resturant Finder
        </Typography>
        <Box display="flex">
          <Typography variant="h8" className={classes.title}>
            Explore
          </Typography>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase placeholder="Search..."></InputBase>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
