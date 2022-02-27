import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getRestaurantData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        // HARD CODE COORDS
        // bl_latitude: "51.507351",
        // tr_latitude: "51.6918741",
        // bl_longitude: "-0.127758",
        // tr_longitude: "-0.127758",

        // MAKE COORDS DYNAMIC
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        "Retry-After": 3600,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
