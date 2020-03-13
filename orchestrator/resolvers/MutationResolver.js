const axios = require("axios");
const moviesURL = "http://localhost:3001";
const tvSeriesURL = "http://localhost:3002";
const Redis = require("ioredis");
const redis = new Redis();

const resolvers = {
  Mutation: {
    addTvSeries: async (_, args) => {
      const delRedisMovies = await redis.del("movies");
      const delRedisTvSeries = await redis.del("tvseries");
      const { data } = await axios.post(tvSeriesURL, {
        title: args.post.title,
        overview: args.post.overview,
        poster_path: args.post.poster_path,
        popularity: args.post.popularity,
        tags: args.post.tags
      });

      return data;
    },
    updateOneTvSeries: async (_, { _id, put }) => {
      const delRedisMovies = await redis.del("movies");
      const delRedisTvSeries = await redis.del("tvseries");

      const { data } = await axios.put(tvSeriesURL + `/${_id}`, {
        title: put.title,
        overview: put.overview,
        poster_path: put.poster_path,
        popularity: put.popularity,
        tags: put.tags
      });

      return data;
    },
    deleteOneTvSeries: async (_, { _id }) => {
      const delRedisMovies = await redis.del("movies");
      const delRedisTvSeries = await redis.del("tvseries");

      const { data } = await axios.delete(tvSeriesURL + `/${_id}`);

      return data;
    },
    addMovie: async (_, args) => {
      const delRedisMovies = await redis.del("movies");
      const delRedisTvSeries = await redis.del("tvseries");
      const { data } = await axios.post(moviesURL, {
        title: args.post.title,
        overview: args.post.overview,
        poster_path: args.post.poster_path,
        popularity: args.post.popularity,
        tags: args.post.tags
      });

      return data;
    },
    updateOneMovie: async (_, { _id, put }) => {
      const delRedisMovies = await redis.del("movies");
      const delRedisTvSeries = await redis.del("tvseries");

      const { data } = await axios.put(moviesURL + `/${_id}`, {
        title: put.title,
        overview: put.overview,
        poster_path: put.poster_path,
        popularity: put.popularity,
        tags: put.tags
      });

      return data;
    },
    deleteOneMovie: async (_, { _id }) => {
      const delRedisMovies = await redis.del("movies");
      const delRedisTvSeries = await redis.del("tvseries");

      const { data } = await axios.delete(moviesURL + `/${_id}`);

      return data;
    }
  }
};

module.exports = resolvers;
