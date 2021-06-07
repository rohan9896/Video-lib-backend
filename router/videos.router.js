const Video = require("../models/video-model");
const express = require("express");
const router = express.Router();
const { extend } = require("lodash");
const { putVideoInReqById } = require("../middlewares/put-video-in-req-by-id")
const {getAllVideos, addNewVideo, getVideoById, updateVideoById, deleteVideoById} = require("../controllers/videos.controller")

//.post without id is used for creation and .post with id is used for updation

//middleware for searching video by id and putting it in req object
router.param("id", putVideoInReqById);

router.route("/")
  .get(getAllVideos)
  .post(addNewVideo)

router.route("/:id")
  .get(getVideoById)
  .post(addNewVideo)
  .delete(deleteVideoById)

module.exports = router;