import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getRestaurantData } from "./api";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  // To make bounds dynamic i.e bl_lat, bl_long, tr_lat, tr_long
  const [bounds, setBounds] = useState(null);

  /* GEO LOCATION
- Need to get our GEO Location coords at the start i.e page load
- Use browser in built geo location api
- Google dev tools allows us to override location (under sensors)
*/
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
    // console.log(coordinates, bounds);
    getRestaurantData().then((data) => {
      // getRestaurantData is async so need to use .then syntax
      // console.log(data);
      setRestaurants(data);
    });
  }, [coordinates, bounds]); // Need to grab the coordinates and bounds every time the map changes

  return (
    <div className="App">
      <Header />
      {/* Header will take full width */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
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
