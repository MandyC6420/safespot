import React from "react"
import "../Safespot.css"
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const LocationCard = ({ location }) => (
    <section className="location">
        {console.log(location)}
        <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    {/* <Card.Title>Huntington City Mission</Card.Title> */}
    <Card.Text>
    <h3 className="location__name">{location.location_name}</h3>
        <address className="location__address">Address:  {location.location_address}</address>
        <div className="location__phoneNumber">Phone Number:  {location.location_phoneNumber}</div>
        <div classname = "location__url"><p><a href = {location.location_url}>Website</a></p></div>
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>

</section>
)
