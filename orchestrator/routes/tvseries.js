const router = require("express").Router();
const Orchestra = require("../controllers");

router.get("/", Orchestra.tvSeriesData);
router.get("/:id", Orchestra.oneTvSeries);
router.post("/", Orchestra.addTvSeries);

module.exports = router;
