import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import { NeighborhoodContext } from "../neighborhood/NeighborhoodProvider";
import { CategoryContext } from "../category/CategoryProvider";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./LocationCard.css";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
// location lists job is to print all locations
export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations, searchTerms, setSearchTerms } = useContext(
    LocationContext
  );
  const { neighborhood, getNeighborhoods } = useContext(NeighborhoodContext);
  const { categories, getCategories } = useContext(CategoryContext);
  const [filteredLocations, setFiltered] = useState([]);

  const history = useHistory();

  const [location, setLocation] = useState({
    location_name: "",
    neighborhood_id: "0",
    category_id: "0",
    location_phoneNumber: "",
    location_address: "",
    location_url: "",
  });

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
    const newLocation = { ...location };
    /* Location is an object with properties.
        Set the property to the new value
        using object bracket notation. */
    newLocation[event.target.id] = event.target.value;
    // update state
    setLocation(newLocation);
  };

  //useEffect - happens first, reach out to the world for something, sets state
  // setting state causes a print
  useEffect(() => {
    //
    getLocations();
    getCategories();
    getNeighborhoods();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching locations
      const subset = locations.filter((location) =>
        location.location_name.toLowerCase().includes(searchTerms)
      );
      setFiltered(subset);
    } else {
      // If the search field is blank, display all locations
      setFiltered(locations);
    }
  }, [searchTerms, locations]);

  return (
    <>
      <div classname="dropdown-div">
       
      </div>

      {/* Bootstrap example */}
      <div className="margin-left">
        <Form>
          <Form.Row>
            <Col>
              <div classname="filters">
                <>
                  Location search :

                  <input
                    type="text"
                    className="input"
                    onKeyUp={(event) => setSearchTerms(event.target.value)}
                    placeholder="Search for a Safe Spot... "
                  />
                </>
              </div>
            </Col>
            <Col>
              <label htmlFor="location"></label>
              <select
                value={location.category_id}
                name="category_id"
                id="category_id"
                onChange={handleControlledInputChange}
                className="filters"
              >
                <option value={parseInt(0)}>
                  Please select a Safe Spot Category
                </option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </Col>
            <Col>
              <label htmlFor=""></label>
              <select
                value={location.neighborhood_id}
                name="neighborhood_id"
                id="neighborhood_id"
                onChange={handleControlledInputChange}
                className="filters"
              >
                <option value={parseInt(0)}>
                  Please select a neighborhood
                </option>
                {neighborhood.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.name}
                  </option>
                ))}
              </select>
            </Col>
          </Form.Row>
        </Form>
      </div>

      <h2></h2>
      <Button
        variant="primary"
        onClick={() => {
          history.push("/locations/create");
        }}
      >
        Add Safe Spot
      </Button>
      {/* conditionals for drop down filters */}
      <div className="locations">
        {filteredLocations.map((singleLocationinLoop) => {
          return location.neighborhood_id !== "0" &&
            location.category_id !== "0" ? (
            location.category_id === singleLocationinLoop.category_id &&
            location.neighborhood_id === singleLocationinLoop.neighborhood_id ? (
              <LocationCard key={singleLocationinLoop.id} singleLocationProp={singleLocationinLoop} />
            ) : null
          ) : location.category_id !== "0" ? (
            location.category_id === singleLocationinLoop.category_id ? (
              <LocationCard key={singleLocationinLoop.id} singleLocationProp={singleLocationinLoop} />
            ) : null
          ) : location.neighborhood_id !== "0" ? (
            location.neighborhood_id === singleLocationinLoop.neighborhood_id ? (
              <LocationCard key={singleLocationinLoop.id} singleLocationProp={singleLocationinLoop} />
            ) : null
          ) : (
            <LocationCard key={singleLocationinLoop.id} singleLocationProp={singleLocationinLoop} />
          );
        })}
      </div>
    </>
  );
};
