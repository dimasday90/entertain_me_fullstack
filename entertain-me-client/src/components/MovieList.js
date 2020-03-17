import React from "react";

import { GridList } from "@material-ui/core";
import MovieItem from "./MovieItem";

export default function MovieList({ movies }) {
  return (
    <GridList className="list-container" cols={2.5}>
      {movies.map(movie => {
        return <MovieItem key={movie._id} movie={movie} />;
      })}
    </GridList>
  );
}
