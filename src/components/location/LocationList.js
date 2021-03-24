import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import { NeighborhoodContext } from "../neighborhood/NeighborhoodProvider";
import { CategoryContext } from "../category/CategoryProvider";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./LocationCard.css";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations, searchTerms } = useContext(LocationContext);
  const { neighborhood, getNeighborhoods } = useContext(NeighborhoodContext);
  const { categories, getCategories } = useContext(CategoryContext);
  const [filteredLocations, setFiltered] = useState([]);

  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
    getCategories();
    getNeighborhoods();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = locations.filter(location => location.location_name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(locations)
    }
  }, [searchTerms, locations])

  return (
    <>
      <h2>Locations</h2>
      <Button
        variant="primary"
        onClick={() => {
          history.push("/locations/create");
        }}
      >
        Add Safe Spot
      </Button>
      <div className="locations">
        {filteredLocations.map((location) => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </div>
    </>
  );
}
