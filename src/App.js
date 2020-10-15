import React from "react";
import "./style.css";

import Movie from "./Movie";

export default function App() {
  const getFormattedMovie = (movie) => {
    movie.name = movie.name.toUpperCase();
    return movie;
  };

  const initialMovies = [
    {
      name: "Chak De India",
      rating: 8.3,
      actors: ["SRK", "SG"],
      description: "SRK's masterpiece",
    },
    {
      name: "Dhoom",
      rating: 7.5,
      actors: ["AB", "JA", "UC"],
      description: "Dhoom",
    },
    {
      name: "Dhoom 2",
      rating: 8.3,
      actors: ["AB", "RH", "UC"],
      description: "Dhoom",
    },
  ];

  const [movies, setMovies] = React.useState(initialMovies);

  setTimeout(function () {
    initialMovies.push({
      name: "Dhoom 3",
      rating: 8.0,
      actors: ["AB", "AK", "UC"],
      description: "Dhoom",
    });
    setMovies([...initialMovies]);
  }, 5000);

  return (
    <>
      {movies.map((movie) => (
        <Movie movie={getFormattedMovie(movie)} key={movie.name} />
      ))}
    </>
  );
}
