import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getRestaurantData } from "./api";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  // Need to get our GEO Location coords at the start i.e page load
  // Use browser in built geo location api
  // Can mess with location override in dev tools

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // destructure to get the coordinates
      // destructure again to get lat and long
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        // Map should position around my location
      }
    );
  }, []);

  useEffect(() => {
    // console.log("IM THE BOUNDS", bounds);
    // console.log("IM THE COORDS", coordinates);
    getRestaurantData().then((data) => {
      //console.log("IM THE DATA", data);
      setRestaurants(data);
    });
  }, [coordinates, bounds]); // Need to grab the coordinates and bounds every time the map changes

  return (
    <div className="App">
      <Header />
      {/* Header will take full width */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List restaurants={restaurants} />
        </Grid>
        {/* Map is larger than list so needs to take less space on mobile i.e 8/12 spaces  */}
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
