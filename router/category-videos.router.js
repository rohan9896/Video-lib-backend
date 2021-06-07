const Video = require("../models/video-model")
const express = require("express");
const router = express.Router();

router.route("/:category")
  .get(async (req, res) => {
    try {
      const categoryVideos = await Video.find({ category: req.params.category })
      res.json({ success: true, categoryArr: categoryVideos })
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Something went wrong" })
    }
  })

module.exports = router;