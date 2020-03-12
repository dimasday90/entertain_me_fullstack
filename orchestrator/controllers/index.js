const Redis = require("ioredis");
const redis = new Redis();
const axios = require("axios");
const moviesURL = "http://localhost:3001/movies";
const tvSeriesURL = "http://localhost:3002/tvseries";

class Orchestra {
  static allData(req, res, next) {
    let result = {};

    redis
      .get("entertainData")
      .then(resultRead => {
        if (resultRead) {
          res.status(200).json(JSON.parse(resultRead));
        } else {
          return axios.get(moviesURL);
        }
      })
      .then(({ data }) => {
        result.movies = data;
        return axios.get(tvSeriesURL);
      })
      .then(({ data }) => {
        result.tvSeries = data;
        return redis.set("entertainData", JSON.stringify(result));
      })
      .then(data => {
        res.status(200).json(result);
      })
      .catch(err => {
        next(err);
      });
  }

  static moviesData(req, res, next) {
    redis
      .get("movies")
      .then(movies => {
        if (movies) {
          res.status(200).json(JSON.parse(movies));
        } else {
          return axios.get(moviesURL);
        }
      })
      .then(({ data }) => {
        redis.set("movies", JSON.stringify(data));
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      });
  }

  static tvSeriesData(req, res, next) {
    redis
      .get("tvseries")
      .then(tvseries => {
        if (tvseries) {
          res.status(200).json(JSON.parse(tvseries));
        } else {
          return axios.get(tvSeriesURL);
        }
      })
      .then(({ data }) => {
        redis.set("tvseries", JSON.stringify(data));
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      });
  }

  static addMovie(req, res, next) {
    let newMovie = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tags: req.body.tags
    };

    redis
      .del("entertainData")
      .del("movies")
      .del("tvseries")
      .then(result => {
        return axios.post(moviesURL, newMovie);
      })
      .then(({ data }) => {
        res.status(201).json(data);
      })
      .catch(err => {
        next(err);
      });
  }

  static addTvSeries(req, res, next) {
    let newTvSeries = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tags: req.body.tags
    };

    redis
      .del("entertainData")
      .del("movies")
      .del("tvseries")
      .then(result => {
        return axios.post(tvSeriesURL, newTvSeries);
      })
      .then(({ data }) => {
        res.status(201).json(data);
      })
      .catch(err => {
        next(err);
      });
  }

  static oneMovie(req, res, next) {
    let result = {};

    redis
      .get("oneMovieData")
      .then(resultRead => {
        if (resultRead) {
          let tempData = JSON.parse(resultRead);
          if (tempData._id == req.params.id) {
            res.status(200).json(tempData);
          } else {
            return axios.get(moviesURL + `/${req.params.id}`);
          }
        } else {
          return axios.get(moviesURL + `/${req.params.id}`);
        }
      })
      .then(({ data }) => {
        if (data) {
          result = data;
          return redis.set("oneMovieData", JSON.stringify(result));
        } else {
          next({
            name: "NotFound"
          });
        }
      })
      .then(data => {
        res.status(200).json(result);
      })
      .catch(err => {
        next(err);
      });
  }

  static oneTvSeries(req, res, next) {
    let result = {};

    redis
      .get("oneTvSeriesData")
      .then(resultRead => {
        if (resultRead) {
          let tempData = JSON.parse(resultRead);
          if (tempData._id == req.params.id) {
            res.status(200).json(tempData);
          } else {
            return axios.get(tvSeriesURL + `/${req.params.id}`);
          }
        } else {
          return axios.get(tvSeriesURL + `/${req.params.id}`);
        }
      })
      .then(({ data }) => {
        result = data;
        return redis.set("oneTvSeriesData", JSON.stringify(result));
      })
      .then(data => {
        res.status(200).json(result);
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = Orchestra;
