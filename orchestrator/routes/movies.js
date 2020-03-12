const router = require("express").Router();
const Orchestra = require("../controllers");

router.get("/", Orchestra.moviesData);
router.get("/:id", Orchestra.oneMovie);
router.post("/", Orchestra.addMovie);

module.exports = router;
