const router = require("express").Router();
const Orchestra = require("../controllers");
const movieRoutes = require("./movies");
const tvseriesRoutes = require("./tvseries");

router.get("/", Orchestra.allData);
router.use("/movies", movieRoutes);
router.use("/tvseries", tvseriesRoutes);

module.exports = router;
