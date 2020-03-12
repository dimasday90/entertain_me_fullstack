const ObjectID = require("mongodb").ObjectID;

class MovieController {
  static findAll(req, res, next) {
    const collection = req.db.collection("movies");
    collection
      .find()
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
      .then(result => {
        console.log(result);
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
      .findOne({ "_id": ObjectID(req.params.id) })
      .then(movie => {
        res.status(200).json(movie);
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = MovieController;
