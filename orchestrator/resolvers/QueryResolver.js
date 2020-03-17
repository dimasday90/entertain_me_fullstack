const axios = require("axios");
const moviesURL = "http://localhost:3001";
const tvSeriesURL = "http://localhost:3002";
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
      const { data: movie } = await axios.get(moviesURL + `/${args._id}`);
      return movie;
    },
    getOneTvSeries: async (_, args) => {
      const { data: tvseries } = await axios.get(tvSeriesURL + `/${args._id}`);
      return tvseries;
    }
  }
};

module.exports = resolvers;
