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

  // where delete happens
  const handleRelease = () => {
    releaseLocation(location.id).then(() => {
      history.push("/locations");
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
      <h3 style={{color: "blue"}} className="location__name">{location.location_name}</h3>
      <div className="location__phoneNumber">{location.location_phoneNumber}</div>
      
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
    
    </section>
  );
};
