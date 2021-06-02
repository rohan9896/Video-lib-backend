const Video = require("../models/video-model");
const express = require("express");
const router = express.Router();
const { extend } = require("lodash");
const { getVideoById } = require("../middlewares/get-video-by-id")

//.post without id is used for creation and .post with id is used for updation

//middleware for searching video by id and putting it in req object
router.param("id", getVideoById);

router.route("/")
  .get(async (req, res) => {
    try {
      const allVideos = await Video.find({});
      res.json({ success: true, allVideos });
    } catch (err) {
      res.status(500).json({ success: false, message: "Unable to fetch the data" })
    }
  })
  .post(async (req, res) => {
    try {
      let newVideo = req.body;
      newVideo = new Video(newVideo);
      const savedVideo = await newVideo.save();
      console.log("new video added in db")
      res.json({ success: true, savedVideo })
    } catch (err) {
      res.status(500).json({ success: false, message: "Unable to set" })
    }
  })

router.route("/:id")
  .get(async (req, res) => {
    //coming from router.param middleware defined above
    let { video } = req;
    video.__v = undefined;
    res.json({ success: true, video })
  })
  .post(async (req, res) => {
    const updateVideo = req.body;
    let { video } = req;
    video = extend(video, updateVideo);
    const savedVideo = await video.save();
    console.log("video updated in db");
    res.json({ success: true, savedVideo })
  })
  .delete(async (req, res) => {
    let { video } = req;
    const deletedVideo = await video.delete();
    console.log("video deleted from db");
    res.json({ success: true, deletedVideo });
  })

module.exports = router;