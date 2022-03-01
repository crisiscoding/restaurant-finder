import React, { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
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
        <Typography variant="h5" className={classes.title}>
          My Resturant Finder
        </Typography>
        <Box display="flex">
          {/* what happens when we load the auto complete component - onLoad handler  */}
          {/* what happens when we change the place - onChange handler */}
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
          {/* Need to connect GM API */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
