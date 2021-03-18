import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationCard } from "./location/LocationCard";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>
      <LocationProvider>
        {/* Render the animal list when http://localhost:3000/locations */}

        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>
    </>
  );
};
