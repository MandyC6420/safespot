import React from "react"
import "../Safespot.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location }) => (
   
    <section className="location">
        <h3 className="location__name"></h3>
        <Link to={`/locations/detail/${location.id}`}>
            { location.location__name }
          </Link>
        <div className="location_address">{ location.location_address}</div>
    </section>
    
)