import React from "react";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import TvSeriesList from "../components/TvSeriesList";
import AddFormDialog from "../components/AddFormDialog";
import { Grid, Box, Typography } from "@material-ui/core";
import { Theaters as TheaterIcon, Tv as TvIcon } from "@material-ui/icons";
import { useQuery } from "@apollo/react-hooks";
import getAllData from "../queries/getAllData";

export default function HomePage() {
  const { loading, error, data } = useQuery(getAllData);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;
  return (
    <>
      <Header />
      <Grid
        container
        direction="column"
        justify="flex-start"
        spacing={3}
        className="main-list-container"
      >
        <Grid
          container
          spacing={1}
          item
          xs={12}
          className="main=list-container"
        >
          <Grid item xs={12}>
            <Box color="warning.main" p={2} className="container-label-box">
              <TheaterIcon />
              <Typography variant="h5">Movie List</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <MovieList movies={data.getMovies} />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          item
          xs={12}
          className="main-list-container"
        >
          <Grid item xs={12}>
            <Box color="error.main" p={2} className="container-label-box">
              <TvIcon />
              <Typography variant="h5">Tv Series List</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TvSeriesList tvseries={data.getTvSeries} />
          </Grid>
        </Grid>
        <Grid container spacing={1} item xs={12}>
          <Grid item xs={12} className="add-form-dialog-btn">
            <AddFormDialog />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
