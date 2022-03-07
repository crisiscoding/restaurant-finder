import React, { useState, useEffect } from "react";
import { getRestaurantData } from "./api";
import { Grid } from "@material-ui/core";
import List from "./components/List/List";
import Map from "./components/Map/Map";

export default function Homepage({
  restaurants,
  cuisine,
  setCuisine,
  coordinates,
  setCoordinates,
  setBounds,
}) {
  return (
    <div>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            restaurants={restaurants}
            cuisine={cuisine}
            setCuisine={setCuisine}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            //restaurants={restaurants} //this gives problems
          />
        </Grid>
      </Grid>
    </div>
  );
}
