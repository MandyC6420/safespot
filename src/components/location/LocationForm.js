import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import { NeighborhoodContext } from "../neighborhood/NeighborhoodProvider";
import { CategoryContext } from "../category/CategoryProvider";
import "./LocationForm.css";
import { useHistory, useParams } from "react-router-dom";


export const LocationForm = () => {
  // const { addLocation } = useContext(LocationContext)
  const {
    locations,
    addLocation,
    getLocations,
    getLocationById,
    updateLocation,
  } = useContext(LocationContext);
  const { neighborhood, getNeighborhoods } = useContext(NeighborhoodContext);
  const { categories, getCategories } = useContext(CategoryContext);

  //for edit, hold on to state of location in this view
  // const [location, setLocation] = useState({})
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const [location, setLocation] = useState({
    location_name: "",
    neighborhood_id: 0,
    category_id: 0,
    location_phoneNumber: "",
    location_address: "",
    location_url: "",
  });
  const { locationId } = useParams();
  const history = useHistory();

  // useEffect(() => {
  //   getLocations().then(getNeighborhoods).then(getCategories);
  // }, []);

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
  const handleSaveLocation = () => {
    if (parseInt(location.locationId) === 0) {
      window.alert("Please select a location");
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (locationId) {
        //PUT - update
        {console.log(location)}
        updateLocation({
          id: location.id,
          location_name: location.location_name,
          location_phoneNumber: location.location_phoneNumber,
          location_address: location.location_address,
          location_url: location.location_url,
          Neighborhood: location.neighborhood_id,
          Categories: location.category_id

        }).then(() => history.push(`/locations/detail/${location.id}`));
      } else {
        //POST - add
        addLocation({
          id: location.id,
          location_name: location.location_name,
          location_phoneNumber: location.location_phoneNumber,
          location_address: location.location_address,
          location_url: location.location_url,
          Neighborhood: location.neighborhood_id,
          Categories: location.category_id

        }).then(() => history.push("/locations"));
      }
    }
  };

  // Get customers and locations. If animalId is in the URL, getAnimalById
  useEffect(() => {
    getLocations().then(() => {
      if (locationId) {
        getLocationById(locationId).then((location) => {
          setLocation(location);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
    getCategories();
    getNeighborhoods();
  }, []);

  return (
    <form className="locationForm">
      <h2 className="locationForm_title">New Safe Spot</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location Name</label>
          <input
            type="text"
            id="location_name"
            name="name"
            required
            autoFocus
            className="control"
            placeholder="Safe Spot name"
            onChange={handleControlledInputChange}
            defaultValue={location.location_name}
          />
          {/* {console.log(locations)} */}
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address"></label>
          <input
            type="text"
            id="location_address"
            required
            autoFocus
            className="control"
            placeholder="Safe Spot Address"
            onChange={handleControlledInputChange}
            defaultValue={location.location_address}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="Phone Number"></label>
          <input
            type="location_phoneNumber"
            id="location_phoneNumber"
            required
            autoFocus
            className="control"
            placeholder="Safe Spot Phone Number"
            onChange={handleControlledInputChange}
            defaultValue={location.location_phoneNumber}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="url"></label>
          <input
            type="location_url"
            id="location_url"
            required
            autoFocus
            className="control"
            placeholder="Safe Spot Website URL"
            onChange={handleControlledInputChange}
            defaultValue={location.location_url}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="location"></label>
          <select
            value={location.category_id}
            name="category_id"
            id="category_id"
            onChange={handleControlledInputChange}
            className="control"
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
          <label htmlFor=""></label>
          <select
            value={location.neighborhood_id}
            name="neighborhood_id"
            id="neighborhood_id"
            onChange={handleControlledInputChange}
            className="control"
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
      <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveLocation()
          }}>
        {locationId ? <>Save Location</> : <>Add Safe Spot</>}</button>
      </form>
    
  );
};
