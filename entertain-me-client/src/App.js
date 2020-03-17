import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import MovieDetails from "./views/MovieDetails";
import TvSeriesDetail from "./views/TvSeriesDetails";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route exact path="/tvseries/:id">
            <TvSeriesDetail />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
