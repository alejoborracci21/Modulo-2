import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  // console.log(species);
  return <div>
    {species.map((specie, key) => (
      <button key={key} onClick={handleSpecies} value={specie}>{specie}</button>
    ))}
    <button onClick={handleAllSpecies}>All Animals</button>
    <br></br>
    <h2>Species</h2>
  </div>
}
