import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import "../Safespot.css"

export const LocationSearch = () => {
    const { setSearchTerms } = useContext(LocationContext)

    return (
        <>
          Location search:
          <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a Safe Spot... " />
        </>
      )
    }