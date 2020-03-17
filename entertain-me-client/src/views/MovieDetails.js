import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, CardMedia } from "@material-ui/core";
import GET_ONE_MOVIE from "../queries/getOneMovie";
import { useQuery } from "@apollo/react-hooks";

export default function Details() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ONE_MOVIE, {
    variables: {
      _id: id
    }
  });
  if (loading) return <h1 style={{ color: "white" }}>Loading</h1>;
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <h1 style={{ color: "white" }}>{JSON.stringify(data)}</h1>
        <Card>
          <CardMedia
            image={data.getOneMovie.poster_path}
            title={data.getOneMovie.title}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
