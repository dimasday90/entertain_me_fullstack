module.exports = (err, req, res, next) => {
  if (err.name === "NotFound") {
    res.status(404).json({
      msg: "data not found"
    });
  } else if (err.name === "BadRequest") {
    res.status(400).json({
      msg: "bad request"
    });
  } else {
    res.status(500).json(err);
  }
};
