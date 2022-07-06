import React from "react";
import "./TrailerDetails.css";

function TrailerDetails({ trailerMovieName, trailerMovieDescription }) {
  return (
    <div className="trailer__details">
      <h1 className="trailer__title">{trailerMovieName}</h1>
      <p className="trailer__description">{trailerMovieDescription}</p>
      <div className="trailer__buttons">
        <button className="trailer__button">Play</button>
        <button className="trailer__button">My List</button>
      </div>
    </div>
  );
}

export default TrailerDetails;
