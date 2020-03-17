import React from "react";

import { GridList } from "@material-ui/core";
import TvSeriesItem from "./TvSeriesItem";

export default function TvSeriesList({ tvseries }) {
  return (
    <GridList className="list-container" cols={2.5}>
      {tvseries.map(tvserial => {
        return <TvSeriesItem key={tvserial._id} tvserial={tvserial} />;
      })}
    </GridList>
  );
}
