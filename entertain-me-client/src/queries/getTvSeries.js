import { gql } from "apollo-boost";

const ALL_TVSERIES = gql`
  {
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

export default ALL_TVSERIES;
