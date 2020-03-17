import { gql } from "apollo-boost";

const ADD_NEW_MOVIE = gql`
  mutation addNewMovie($input: PostMovie) {
    addMovie(post: $input) {
      msg
    }
  }
`;

export default ADD_NEW_MOVIE;
