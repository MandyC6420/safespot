import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/LocationProvider";
import { NeighborhoodContext } from "../neighborhood/NeighborhoodProvider";
import { CategoryContext } from "../category/CategoryProvider";
import "../Safespot.css";
import { useHistory, useParams } from "react-router-dom";

export const LocationForm = () => {
  // const { addLocation } = useContext(LocationContext)
  const { locations, addLocation, getLocations } = useContext(LocationContext);
  const { neighborhood, getNeighborhoods } = useContext(NeighborhoodContext);
  const { categories, getCategories } = useContext(CategoryContext);

  const [location, setLocation] = useState({
    location_name: "",
    neighborhood_id: 0,
    category_id: 0,
    location_phoneNumber: "",
    location_address: "",
    location_url: "",
  });

  const history = useHistory();

  useEffect(() => {
    getLocations().then(getNeighborhoods).then(getCategories);
  }, []);

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
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

  const handleClickSaveLocation = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const neighborhood_id = parseInt(location.neighborhood_id);
    const category_id = parseInt(location.category_id);

    if (neighborhood_id === 0 || category_id === 0) {
      window.alert("Please fill out all fields");
    } else {
      //invoke addLocation passing location as an argument.
      //once complete, change the url and display the location list
      addLocation(location).then(() => history.push("/locations"));
    }
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Safe Spot</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Safe Spot name"
            value={location.location_name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue={location.category_id}
            name="locationId"
            id="locationId"
            className="form-control"
          >
            <option value="0">Select a Safe Spot Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select
            defaultValue={location.neighborhood_id}
            name="customer"
            id="customerId"
            className="form-control"
          >
            <option value="0">Select a neighborhood</option>
            {neighborhood.map((n) => (
              <option key={n.id} value={n.id}>
                {n.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Save Save Spot
      </button>
    </form>
  );
};
