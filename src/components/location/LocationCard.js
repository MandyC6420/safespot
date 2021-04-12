import React from "react";
import "../Safespot.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LocationCard = ({ singleLocationProp }) => (
  <section className="location">
    <Card style={{ width: "17rem", backgroundColor: "#C4DEF6" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        {/* <Card.Title>Huntington City Mission</Card.Title> */}
        <Card.Text>
          <Link to={`/locations/detail/${singleLocationProp.id}`}>
            {singleLocationProp.location_name}
          </Link>
          {/* <h3 className="location__name">{location.location_name}</h3> */}
          <address className="location__address">
            Address: {singleLocationProp.location_address}
          </address>
          <div className="location__phoneNumber">
            Phone Number: {singleLocationProp.location_phoneNumber}
          </div>
          <div classname="location__url">
            <p>
              <a target={"_blank"} href={singleLocationProp.location_url}>Website</a>
            </p>
          </div>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  </section>
);
