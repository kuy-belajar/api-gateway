const express = require("express");
const router = express.Router();

// const verifyToken = require('../middlewares/verifyToken');

const mediaControllers = require("../controllers/media");

router.post("/", mediaControllers.create);
router.get("/", mediaControllers.getAll);
router.delete("/:id", mediaControllers.destroy);

module.exports = router;
