import { gql } from "apollo-boost";

const ALL_MOVIES = gql`
  {
    getMovies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export default ALL_MOVIES;
