import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles(); // Use styles as function (css in js)
  const isMobile = useMediaQuery("min-width:600px"); // If larger than 600px set isMobile variable to false
  const coordinates = { lat: 0, long: 0 }; // Set temporary long and lat coordinates as I dont have real cords yet!

  return (
    // <div className={classes.mapContainer}>
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBW9zun7CSCYYDwdsZzm9p3L9Pca-Ajzjg" }}
        defaultCenter={coordinates} // center map & pass co-ordinates
        center={coordinates} // this is the current center of the map [?]
        defaultZoom={14}
        margin={[50, 50, 50, 50]} // top, right, bottom, left
        options={""}
        onChange={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
