import { gql } from "apollo-boost";

const UPDATE_ONE_MOVIE = gql`
  mutation updateMovie($_id: ID, $input: EditMovie) {
    updateOneMovie(_id: $_id, put: $input) {
      msg
    }
  }
`;

export default UPDATE_ONE_MOVIE;
