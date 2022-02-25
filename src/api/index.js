import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getRestaurantData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: "51.2867602",
        tr_latitude: "51.6918741",
        bl_longitude: "-0.5103751",
        tr_longitude: "0.3340155",
        // NEED TO MAKE THIS DYNAMIC - NOT WORKING ATM
        // bl_latitude: sw.lat,
        // tr_latitude: ne.lat,
        // bl_longitude: sw.lng,
        // tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
