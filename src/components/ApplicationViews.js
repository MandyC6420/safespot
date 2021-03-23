import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { LocationCard } from "./location/LocationCard";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { LocationForm } from "./location/LocationForm";
import { NeighborhoodProvider } from "./neighborhood/NeighborhoodProvider";
import { CategoryProvider } from "./category/CategoryProvider";
import { LocationDetail } from "./location/LocationDetail";
import { Location } from "./location/Location";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/locations */}
        <CategoryProvider>
          <NeighborhoodProvider>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/locations">
              <LocationList />
            </Route>
            <Route exact path="/locations/detail/:locationId(\d+)">
              <LocationDetail />
            </Route>
            <Route path="/locations/edit/:locationId(\d+)">
              <LocationForm />
            </Route>
            <Route exact path="/locations/create">
              <LocationForm />
            </Route>
          </NeighborhoodProvider>
        </CategoryProvider>
      </LocationProvider>
    </>
  );
};
