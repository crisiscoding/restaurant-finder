import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getRestaurantData } from "./api";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [cuisine, setCuisine] = useState([]); // Vegetarian Friendly

  // const [filteredRest, setFilteredRest] = useState("");
  const [rating, setRating] = useState("");
  // const [cuisine, setCuisine] = useState("");

  // Need to get our GEO Location coords at the start
  // Use browser in built geo location api
  // Can mess with location override in dev tools

  // 1. This useEffect only happens at the start
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

  // 2. This useEffect happens ONLY when the coordinates or bounds changes
  useEffect(() => {
    // console.log("IM THE BOUNDS", bounds);
    // console.log("IM THE COORDS", coordinates);
    // make coordinates dynamic
    getRestaurantData(bounds.sw, bounds.ne).then((data) => {
      // console.log("IM THE DATA FROM TA API", data);
      setRestaurants(data);
      //setFilteredRest([]);
    });
  }, [coordinates, bounds]);
  //Need to grab the coordinates and bounds of every time the map changes

  // 3. Create a useEffect happens ONLY when the cuisine changes
  // NEED TO BUILD THIS FUNCTIONALITY - CODE BELOW DOES NOT WORK!

  // useEffect(() => {
  //   const filteredRestaurants = restaurants.filter((r) => r.cuisine > cuisine);
  //   setFilteredRest(filteredRest);
  // }, [cuisine]);

  return (
    <div className="App">
      <Header />
      {/* Header will take full width */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            restaurants={restaurants}
            // rating={rating}
            // setRating={setRating}
            cuisine={cuisine}
            setCuisine={setCuisine}
          />
        </Grid>
        {/* Map is larger than list so needs to take less space on mobile i.e 8/12 spaces  */}
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            restaurants={restaurants}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
