import React from "react";
import {
  GridListTile,
  Card,
  CardMedia,
  CardActionArea
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  return (
    <GridListTile className="item-tile">
      <Card>
        <CardActionArea>
          <Link to={`/movies/${movie._id}`}>
            <CardMedia
              className="item-img"
              image={movie.poster_path}
              title={movie.title}
            />
          </Link>
        </CardActionArea>
      </Card>
    </GridListTile>
  );
}
