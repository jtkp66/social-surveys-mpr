const express = require("express");
const router = express.Router();

// @route   GET api/surveys/test
// @desc    Tests surveys route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "surveys Works" }));

module.exports = router;
