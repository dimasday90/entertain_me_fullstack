const axios = require("axios");
const moviesURL = "http://localhost:3001/movies";
const tvSeriesURL = "http://localhost:3002/tvseries";
const Redis = require("ioredis");
const redis = new Redis();

const resolvers = {
  Query: {
    getMovies: async () => {
      const redisMovies = await redis.get("movies");
      if (redisMovies) return JSON.parse(redisMovies);

      const { data: movies } = await axios.get(moviesURL);
      const setRedisMovies = await redis.set("movies", JSON.stringify(movies));
      return movies;
    },
    getTvSeries: async () => {
      const redisTvSeries = await redis.get("tvseries");
      if (redisTvSeries) return JSON.parse(redisTvSeries);

      const { data: tvseries } = await axios.get(tvSeriesURL);
      const setRedisTvSeries = await redis.set(
        "tvseries",
        JSON.stringify(tvseries)
      );
      return tvseries;
    },
    getOneMovie: async (_, args) => {
      const redisOneMovie = await redis.get("oneMovie");
      if (redisOneMovie) {
        if (JSON.parse(redisOneMovie)._id == args._id)
          return JSON.parse(redisOneMovie);
      }

      const { data: movie } = await axios.get(moviesURL + `/${args._id}`);
      const setRedisOneMovie = await redis.set(
        "oneMovie",
        JSON.stringify(movie)
      );
      return movie;
    },
    getOneTvSeries: async (_, args) => {
      const redisOneTvSeries = await redis.get("oneTvSeries");
      if (redisOneTvSeries) {
        if (JSON.parse(redisOneTvSeries)._id == args._id)
          return JSON.stringify(redisOneTvSeries);
      }

      const { data: tvseries } = await axios.get(tvSeriesURL + `/${args._id}`);
      const setRedisOneTvSeries = await redis.set(
        "oneTvSeries",
        JSON.stringify(tvseries)
      );
      return tvseries;
    }
  }
};

module.exports = resolvers;
