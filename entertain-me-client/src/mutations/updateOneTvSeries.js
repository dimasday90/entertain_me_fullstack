import { gql } from "apollo-boost";

const UPDATE_ONE_TV_SERIES = gql`
  mutation updateTvSeries($_id: ID, $input: EditTvSeries) {
    updateOneTvSeries(_id: $_id, put: $input) {
      msg
    }
  }
`;

export default UPDATE_ONE_TV_SERIES;
