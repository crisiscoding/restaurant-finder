import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

const Details = ({ restaurant }) => {
  //console.log("I AM THE RESTAURANTS", restaurant);
  const classes = useStyles();
  return (
    // Add a shadow effect
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
        {/* add extra margin at bottom */}
        <Typography gutterBottom variant="h5">
          {restaurant.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(restaurant.rating)} readOnly />
          <Typography component="legend">
            {/* display review/s - if greater than 1 */}
            {restaurant.num_reviews} review{restaurant.num_reviews > 1 && "s"}
          </Typography>
        </Box>
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
      </CardActions>
    </Card>
  );
};

export default Details;
