import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./Homepage";
import FavList from "./components/FavList/FavList";
import { getRestaurantData } from "./api";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [cuisine, setCuisine] = useState([]);
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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/favourites"
            element={
              <FavList /* addItem={(newItem) => handleAddItem(newItem)} */ />
            }
          />
          <Route
            path="/"
            element={
              <Homepage
                restaurants={restaurants}
                cuisine={cuisine}
                setCuisine={setCuisine}
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
