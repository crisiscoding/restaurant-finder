import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import Details from "../Details/Details.js";

import useStyles from "./styles.js";

const List = ({ restaurants }) => {
  const classes = useStyles();
  const [rating, setRating] = useState("");
  const [cusine, setCusine] = useState("");

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Cusine</InputLabel>
        <Select
          value={cusine}
          onChange={(e) => {
            setCusine(e.target.value);
          }}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Chinese"}>Chinese</MenuItem>
          <MenuItem value={"Italian"}>Italian</MenuItem>
          <MenuItem value={"Spanish"}>Spanish</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3.5}>Above 3.0</MenuItem>
          <MenuItem value={4.0}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {restaurants?.map((restaurant, i) => (
          <Grid item key={i} xs={12}>
            <Details restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
