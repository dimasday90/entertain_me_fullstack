import { gql } from "apollo-boost";

const DELETE_ONE_MOVIE = gql`
  mutation deleteMovies($_id: ID) {
    deleteOneMovie(_id: $_id) {
      msg
    }
  }
`;

export default DELETE_ONE_MOVIE;
