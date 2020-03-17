import React from "react";
import {
  GridListTile,
  Card,
  CardMedia,
  CardActionArea
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function TvSeriesItem({ tvserial }) {
  return (
    <GridListTile className="item-tile">
      <Card>
        <CardActionArea>
          <Link to={`/tvseries/${tvserial._id}`}>
            <CardMedia
              className="item-img"
              image={tvserial.poster_path}
              title={tvserial.title}
            />
          </Link>
        </CardActionArea>
      </Card>
    </GridListTile>
  );
}
