import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./LocationCard.css";
import { useParams, useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

export const LocationDetail = () => {
  const { getLocationById, releaseLocation } = useContext(LocationContext);

  const [location, setLocation] = useState({});
  const { locationId } = useParams();
  const history = useHistory();

  const handleRelease = () => {
    releaseLocation(location.id).then(() => {
      history.push("locations");
    });
  };

  useEffect(() => {
    console.log("useEffect", locationId);
    getLocationById(locationId).then((response) => {
      setLocation(response);
    });
  }, []);

  return (
    <section className="location">
      <h3 className="location__name">{location.location_name}</h3>
      <div className="location__breed">{location.location_phoneNumber}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="location__location">
        Location: {location.location_address}
      </div>
      <Button variant = "primary"
        onClick={() => {
          history.push(`/locations/edit/${location.id}`);
        }}
      >
        Edit
        </Button>{' '}
      <Button onClick={handleRelease}>Delete Safe Spot</Button>
      {/* <div className="location__owner">Customer: {location.customer?.location_url}</div> */}
    </section>
  );
};
