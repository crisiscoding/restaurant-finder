import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@material-ui/core";

export default function FavList() {
  const [error, setError] = useState();
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const [filterByPreference, setFilterByPreference] = useState("");
  //console.log(filterByPreference, "at filterByPreference");

  const handleFilterChange = (e) => {
    console.log(e.target.value, "at handleFilterChange");
    setFilterByPreference(e.target.value);
  };

  async function getItems() {
    let dataURL = `/favourites`;
    console.log("inside get");
    try {
      let response = await fetch(dataURL);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setItems(data);
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError(`Network error: ${error.message}`);
    }
  }
  return (
    <div>
      <label>
        Dietary Preference
        <select value={filterByPreference} onChange={handleFilterChange}>
          <option value="Vegetarian Friendly">Vegetarian</option>
          <option value="Vegan Options">Vegan</option>
          <option value="Gluten Free Options">Gluten Free</option>
        </select>
      </label>
      {items
        .filter((item) => {
          if (filterByPreference === "") {
            console.log("no filter:", filterByPreference);
            return item;
          } else if (filterByPreference !== "") {
            console.log("else filter:", filterByPreference);
            if (item.cuisine.split(",").includes(filterByPreference)) {
              return item;
            }
          }
        })

        .map((i) => (
          <div key={i.id}>
            <Card elevation={6}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {i.name}
                </Typography>
                <div>
                  {console.log(i.cuisine.split(","))}
                  {i.cuisine.split(",").map((e) => (
                    <Chip
                      key={e}
                      size="small"
                      label={e}
                      //className={classes.chip}
                    ></Chip>
                  ))}
                </div>
                <Typography gutterBottom variant="body1">
                  {i.notes}
                </Typography>

                <form>
                  <TextField
                    label="Notes"
                    variant="outlined"
                    color="secondary"
                  />
                </form>
                {/* //onClick={() => props.showItem(i)} */}
                {/* </Link> */}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(i.website, "_blank")} // open in new tab
                >
                  Website
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
    </div>
  );
}
