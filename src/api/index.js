import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  method: "GET",
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "a0673673d9msh0ffa9f1d70c65bfp1b2e2cjsn09126c1baca0",
  },
};

export const getRestaurantData = async () => {
  try {
    const {
      data: { data }, // destruct twice to get to restaurant data
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
