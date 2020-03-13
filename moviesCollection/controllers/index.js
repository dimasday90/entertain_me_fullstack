const ObjectID = require("mongodb").ObjectID;

class MovieController {
  static findAll(req, res, next) {
    const collection = req.db.collection("movies");
    collection
      .find(
        {},
        {
          sort: [["title", 1]]
        }
      )
      .toArray()
      .then(movies => {
        res.status(200).json(movies);
      })
      .catch(err => {
        next(err);
      });
  }

  static addMovie(req, res, next) {
    const collection = req.db.collection("movies");
    let newMovie = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tags: req.body.tags
    };

    collection
      .insertOne(newMovie)
      .then(_ => {
        res.status(201).json({
          msg: "new movie inserted successfully"
        });
      })
      .catch(err => {
        next(err);
      });
  }

  static oneMovie(req, res, next) {
    const collection = req.db.collection("movies");
    collection
      .findOne({ _id: ObjectID(req.params.id) })
      .then(movie => {
        res.status(200).json(movie);
      })
      .catch(err => {
        next(err);
      });
  }

  static updateOneMovie(req, res, next) {
    const collection = req.db.collection("movies");
    let updateMovie = {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tags: req.body.tags
    };
    collection
      .updateOne(
        { _id: ObjectID(req.params.id) },
        {
          $set: updateMovie
        }
      )
      .then(_ => {
        res.status(200).json({
          msg: "a movie updated successfully"
        });
      })
      .catch(err => {
        next(err);
      });
  }

  static deleteOneMovie(req, res, next) {
    const collection = req.db.collection("movies");
    collection
      .deleteOne({ _id: ObjectID(req.params.id) })
      .then(_ => {
        res.status(200).json({
          msg: "one movie deleted successfully"
        });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = MovieController;
