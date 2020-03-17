import { gql } from "apollo-boost";

const DELETE_ONE_TV_SERIES = gql`
  mutation deleteTvSeries($_id: ID) {
    deleteOneTvSeries(_id: $_id) {
      msg
    }
  }
`;

export default DELETE_ONE_TV_SERIES;
