import React from "react";

export default function Movie({ movie }) {
  return (
    <>
      <div className="title">{movie.name}</div>
      <div>{movie.rating}</div>
      <div>{movie.actors}</div>
      <div>{movie.description}</div>
    </>
  );
}
