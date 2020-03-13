const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  type TvSeries {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  type Message {
    msg: String
  }

  type Query {
    getMovies: [Movie]
    getTvSeries: [TvSeries]
    getOneMovie(_id: ID!): Movie
    getOneTvSeries(_id: ID!): TvSeries
  }

  type Mutation {
    addTvSeries(post: PostTvSeries): Message
    addMovie(post: PostMovie): Message
    updateOneTvSeries(_id: ID, put: EditTvSeries): Message
    updateOneMovie(_id: ID, put: EditMovie): Message
    deleteOneTvSeries(_id: ID): Message
    deleteOneMovie(_id: ID): Message
  }

  input PostMovie {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  input PostTvSeries {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  input EditTvSeries {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }

  input EditMovie {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
`;

module.exports = typeDefs;
