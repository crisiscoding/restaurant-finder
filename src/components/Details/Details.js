import React from "react";

const Details = ({ restaurant }) => {
  console.log(restaurant);
  return <h2>{restaurant.name}</h2>;
};

export default Details;
