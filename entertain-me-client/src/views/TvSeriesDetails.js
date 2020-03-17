import React from "react";
import { useParams } from "react-router-dom";
import { Grid, CardMedia, Typography } from "@material-ui/core";
import GET_ONE_TV_SERIES from "../queries/getOneTvSeries";
import { useQuery } from "@apollo/react-hooks";
import Header from "../components/Header";
import UpdateDialog from "../components/UpdateFormDialog";
import DeleteDialog from "../components/DeleteDialog";

export default function Details() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ONE_TV_SERIES, {
    variables: {
      _id: id
    }
  });
  if (loading) return <h1 style={{ color: "white" }}>Loading</h1>;
  if (error) return <h1 style={{ color: "white" }}>Error</h1>;
  return (
    <>
      <Header />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <CardMedia
            style={{
              width: 250,
              height: 350
            }}
            image={data.getOneTvSeries.poster_path}
            title={data.getOneTvSeries.title}
          />
        </Grid>
        <Grid item xs={12} sm container style={{ color: "white" }}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h2">
                {data.getOneTvSeries.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {data.getOneTvSeries.overview}
              </Typography>
              <Typography variant="body2">
                Popularity: {data.getOneTvSeries.popularity}
              </Typography>
              <Typography variant="body2">
                Tags: {data.getOneTvSeries.tags.join(", ")}
              </Typography>
            </Grid>
            <Grid
              item
              container
              spacing={2}
              direction="row"
              justify="flex-start"
            >
              <Grid item>
                <UpdateDialog data={data.getOneTvSeries} type={`tvseries`} />
              </Grid>
              <Grid item>
                <DeleteDialog data={data.getOneTvSeries} type={`tvseries`} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
