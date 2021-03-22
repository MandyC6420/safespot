import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const NeighborhoodContext = createContext()

// This component establishes what data can be used.
export const NeighborhoodProvider = (props) => {
    const [neighborhood, setNeighborhoods] = useState([])

    const getNeighborhoods = () => {
        return fetch("http://localhost:8088/Neighborhood")
        .then(res => res.json())
        .then(setNeighborhoods)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <NeighborhoodContext.Provider value={{
            getNeighborhoods,
            neighborhood
        }}>
            {props.children}
        </NeighborhoodContext.Provider>
    )
}
