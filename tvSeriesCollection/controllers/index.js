const ObjectID = require("mongodb").ObjectID;

class TvSeriesController {
  static findAll(req, res, next) {
    const collection = req.db.collection("tvseries");
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
        res.status(404).json(err);
      });
  }

  static addTvSeries(req, res, next) {
    const collection = req.db.collection("tvseries");
    let newTvSeries = {
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
          msg: "new tv series inserted successfully"
        });
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }

  static oneTvSeries(req, res, next) {
    const collection = req.db.collection("tvseries");
    collection
      .findOne({ _id: ObjectID(req.params.id) })
      .then(tvseries => {
        res.status(200).json(tvseries);
      })
      .catch(err => {
        next(err);
      });
  }

  static updateOneTvSeries(req, res, next) {
    const collection = req.db.collection("tvseries");
    let updateTvSeries = {
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
          $set: updateTvSeries
        }
      )
      .then(_ => {
        res.status(200).json({
          msg: "tv series updated successfully"
        });
      })
      .catch(err => {
        next(err);
      });
  }

  static deleteOneTvSeries(req, res, next) {
    const collection = req.db.collection("tvseries");
    collection
      .deleteOne({ _id: ObjectID(req.params.id) })
      .then(_ => {
        res.status(200).json({
          msg: "one tv series deleted successfully"
        });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = TvSeriesController;
