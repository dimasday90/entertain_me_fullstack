import { gql } from "apollo-boost";

const ADD_NEW_TVSERIES = gql`
  mutation addNewTvSeries($input: PostTvSeries) {
    addTvSeries(post: $input) {
      msg
    }
  }
`;

export default ADD_NEW_TVSERIES;
