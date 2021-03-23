// This code imports the main React library, and two functions that it exports.
import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const LocationContext = createContext();

// This component establishes what data can be used.
export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch("http://localhost:8088/locations")
      .then((res) => res.json())
      .then(setLocations);
  };

  const addLocation = (locationObj) => {
    return fetch("http://localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationObj),
    })
      .then((res) => res.json())
      .then(getLocations);
  };

  const getLocationById = (id) => {
    return fetch(
      `http://localhost:8088/locations/${id}?_expand=location_name&_expand=location_phoneNumber&_expand=location_address&_expand=location_url`
    ).then((res) => res.json());
  };

  const releaseLocation = (locationId) => {
    return fetch(`http://localhost:8088/locations/${locationId}`, {
      method: "DELETE",
    }).then(getLocations);
  };

  const updateLocation = (location) => {
    return fetch(`http://localhost:8088/locations/${location.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    }).then(getLocations);
  };

  /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
  return (
    <LocationContext.Provider
      value={{
        locations,
        getLocations,
        addLocation,
        getLocationById,
        releaseLocation,
        updateLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
