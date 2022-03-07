import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
//import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

const Details = ({ restaurant }) => {
  //console.log("I AM THE RESTAURANTS", restaurant);
  const classes = useStyles();
  //const [favs, setFavs] = useState([]); //useState not defined??

  async function addToFavs(restaurant) {
    let newCuisine = restaurant.cuisine.map((e) => e.name);
    console.log("newCuisine", newCuisine);
    let favrest = {
      name: restaurant.name,
      website: restaurant.website,
      cuisine: newCuisine, //it's an array of objects, only need cuisine.name
      notes: "",
    };
    //console.log("favrest:", favrest, "restaurant:", restaurant);
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favrest),
    };
    let data = null;
    try {
      let response = await fetch("/favourites", options);
      if (response.ok) {
        data = await response.json();
        // setFavs(data); //
      } else {
        console.log("server error:", response.statusText);
      }
    } catch (e) {
      console.log("network error:", e.message);
    }
    return data;
  }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          // Add a ternary to check if a restaurant has an image
          restaurant.photo
            ? restaurant.photo.images.small.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={restaurant.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {restaurant.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating name="read-only" value={Number(restaurant.rating)} readOnly />
          <Typography component="legend">
            {restaurant.num_reviews} review{restaurant.num_reviews > 1 && "s"}
          </Typography>
        </Box>
        {restaurant?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {restaurant.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {restaurant.address}
          </Typography>
        )}
        {restaurant.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {restaurant.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(restaurant.website, "_blank")} // open in new tab
        >
          Website
        </Button>
        <Button
          // startIcon={<FavoriteBorderIcon />}
          size="small"
          color="secondary"
          onClick={() => addToFavs(restaurant)}
          // onClick={console.log("clicking")}
        >
          Favourite
        </Button>
      </CardActions>
    </Card>
  );
};

export default Details;
