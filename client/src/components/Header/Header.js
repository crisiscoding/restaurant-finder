import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Button,
} from "@material-ui/core";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  // {setCoordinates}
  const classes = useStyles();

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoComp) => setAutocomplete(autoComp);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
    // What do i want to do once get new place [?] -> set it to the state!
    // Need to change the coordinates in app.js by passing setCoordinates as props to the Header
  };
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link to={`/`} underline="none">
          <Button variant="text" className={classes.title}>
            My Restaurant Finder
          </Button>
        </Link>
        <Link to={`/favourites`}>
          <Button variant="contained" color="secondary">
            Favourites
          </Button>
        </Link>
        {/* <Box display="flex">
           what happens when we load the auto complete component - onLoad handler
           what happens when we change the place - onChange handler 
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
          
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
