import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import { NeighborhoodContext } from "../neighborhood/NeighborhoodProvider";
import { CategoryContext } from "../category/CategoryProvider";
import { useHistory } from "react-router-dom"
import { Button } from 'react-bootstrap';
import "./LocationCard.css"

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)
  const { neighborhood, getNeighborhoods } = useContext(NeighborhoodContext);
  const { categories, getCategories } = useContext(CategoryContext);

const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
    getCategories()
    getNeighborhoods()
    

  }, [])

  return (
    <>
        <h2>Locations</h2>
		<Button variant="primary" onClick={() => {history.push("/locations/create")}}>
            Add Safe Spot
        </Button>
        <div className="locations">
        {
		locations.map(location => {
      return <LocationCard key={location.id} location={location} />
    })
        }
        </div>
        </>
    
)
  return (
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}