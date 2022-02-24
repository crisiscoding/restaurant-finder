import React from "react";
import GoggleMapReact from "google-map-react";
import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles(); // Use styles as function

  return (
    <div className={classes.mapContainer}>
      <GoggleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAzG7oTs6mqr8EuG68kzsqSVIvV67bygSM" }}
        defaultCenter={coordinates} // default center map & pass co-ordinates
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]} // top, right, bottom, left
        options={""}
        onChange={(e) => {
          // console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      ></GoggleMapReact>
    </div>
  );
};

export default Map;
