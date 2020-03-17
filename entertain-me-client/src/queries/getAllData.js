import { gql } from "apollo-boost";

const ALL_DATA = gql`
  {
    getMovies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
    getTvSeries {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export default ALL_DATA;
