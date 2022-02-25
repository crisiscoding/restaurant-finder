import React from "react";
import GoggleMapReact from "google-map-react";
import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoggleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          //console.log("HERE I AM", e);
          setCoordinates({ lat: e.center.latitude, lng: e.center.longitude });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      ></GoggleMapReact>
    </div>
  );
};

export default Map;
