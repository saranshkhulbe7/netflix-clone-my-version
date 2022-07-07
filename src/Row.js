import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios"; // default export of "./axios.js" i.e. instance
import Youtube from "react-youtube";
import Axios from "axios";
import TrailerDetails from "./TrailerDetails.js";
import Fade from "react-reveal/Fade";
// import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [trailerMovie, setTrailerMovie] = useState({});

  useEffect(() => {
    //if [] run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results);

      //filteration of movies
      let filtered_movies = [];
      for (let i = 0; i < request.data.results.length; i++) {
        if (
          request.data.results[i].poster_path !== null &&
          request.data.results[i].backdrop_path !== null
        ) {
          filtered_movies.push(request.data.results[i]);
        }
      }
      setMovies(filtered_movies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //   console.log(movies);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  //taken from react-youtube documentation at https://www.npmjs.com/package/react-youtube
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // console.log(movie);
      // console.log(
      //   "movie name :",
      //   movie?.original_title || movie?.original_name || ""
      // );

      let movie_name = movie?.original_title || movie?.original_name;
      if (movie_name == null) {
        return;
      }

      //trailer fetching
      async function fetchTrailer(movie_name) {
        const movieUrl =
          "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB4fxFbEZqA9Fc-xBZU_TclTvHDvm21Qic&type=video&videoDefinition=high&q=" +
          movie_name +
          " latest trailer";
        Axios.get(movieUrl).then(function (trailerData) {
          // console.log(trailerData.data.items[0].id.videoId);
          setTrailerUrl(trailerData.data.items[0].id.videoId);
        });
      }
      fetchTrailer(movie_name);

      //getting trailer movie details
      for (let i = 0; i < movies.length; i++) {
        if (
          movies[i].original_title === movie_name ||
          movies[i].original_name === movie_name
        ) {
          const TrailerDetails = {
            name: movie_name,
            description: truncate(movies[i]?.overview, 250),
          };
          setTrailerMovie(TrailerDetails);
          break;
        }
      }
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && (
        <div className="trailer">
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
          <Fade right duration={1500}>
            <TrailerDetails
              trailerMovieName={trailerMovie.name}
              trailerMovieDescription={trailerMovie.description}
            />
          </Fade>
        </div>
      )}
    </div>
  );
}

export default Row;
