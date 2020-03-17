import { gql } from "apollo-boost";

const GET_ONE_TV_SERIES = gql`
  query oneTvSeries($_id: ID!) {
    getOneTvSeries(_id: $_id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export default GET_ONE_TV_SERIES;
