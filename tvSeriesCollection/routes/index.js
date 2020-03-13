const router = require("express").Router();
const TvSeriesController = require("../controllers");

router.get("/", TvSeriesController.findAll);
router.get("/:id", TvSeriesController.oneTvSeries);
router.post("/", TvSeriesController.addTvSeries);
router.put("/:id", TvSeriesController.updateOneTvSeries);
router.delete("/:id", TvSeriesController.deleteOneTvSeries);

module.exports = router;
