import { gql } from "apollo-boost";

const GET_ONE_MOVIE = gql`
  query oneMovie($_id: ID!) {
    getOneMovie(_id: $_id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`;

export default GET_ONE_MOVIE;
