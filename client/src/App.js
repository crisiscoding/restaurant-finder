import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getRestaurantData } from "./api";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({
    /* lat: 40.41,
    lng: 3.7, */
  });
  const [bounds, setBounds] = useState({});
  const [cuisine, setCuisine] = useState([]); // Vegetarian Friendly

  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getRestaurantData(bounds.sw, bounds.ne).then((data) => {
      setRestaurants(data);
    });
  }, [coordinates, bounds]);

  return (
    <div className="App">
      <Header />
      {/* Header will take full width */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            restaurants={restaurants}
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
