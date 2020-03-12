const router = require("express").Router();
const TvSeriesController = require("../controllers");

router.get("/", TvSeriesController.findAll);
router.get("/:id", TvSeriesController.oneTvSeries);
router.post("/", TvSeriesController.addTvSeries);

module.exports = router;
