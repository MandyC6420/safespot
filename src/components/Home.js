import React from "react";
import { LocationCard } from "./location/LocationCard";
import safespotlogo from "../components/auth/safespotlogo.png";
import "./Home.css";


export const Home = () => (
  <>
    <div className="safety-first">
    <img src={safespotlogo} style={{width:500}} />
    </div>
  </>
);
