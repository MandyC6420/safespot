import React from "react";
import "../Safespot.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LocationCard = ({ location }) => (
  <section className="location">
    <Card style={{ width: "17rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        {/* <Card.Title>Huntington City Mission</Card.Title> */}
        <Card.Text>
          <Link to={`/locations/detail/${location.id}`}>
            {location.location_name}
          </Link>
          {/* <h3 className="location__name">{location.location_name}</h3> */}
          <address className="location__address">
            Address: {location.location_address}
          </address>
          <div className="location__phoneNumber">
            Phone Number: {location.location_phoneNumber}
          </div>
          <div classname="location__url">
            <p>
              <a target={"_blank"} href={location.location_url}>Website</a>
            </p>
          </div>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  </section>
);
