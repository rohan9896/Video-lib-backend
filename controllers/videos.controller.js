const Video = require("../models/video-model");

const getAllVideos = async (req, res) => {
  try {
    let allVideos = await Video.find({});
    res.json({ success: true, allVideos });
  } catch (err) {
    res.status(500).json({ success: false, message: "Unable to fetch the data" })
  }
}

const addNewVideo = async (req, res) => {
  try {
    let newVideo = req.body;
    newVideo = new Video(newVideo);
    const savedVideo = await newVideo.save();
    console.log("new video added in db");
    res.json({ success: true, savedVideo });
  } catch (err) {
    res.status(500).json({ success: false, message: "Unable to set" });
  }
}

const getVideoById = async (req, res) => {
  let { video } = req;
  video.__v = undefined;
  res.json({ success: true, video })
}

const updateVideoById = async (req, res) => {
  try {
    const updateVideo = req.body;
    let { video } = req;
    video = extend(video, updateVideo);
    const savedVideo = await video.save();
    console.log("video updated in db");
    res.json({ success: true, savedVideo });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
}

const deleteVideoById = async (req, res) => {
  try {
    let { video } = req;
    await video.remove();
    console.log("video deleted from db");
    res.json({ success: true, deletedVideo });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
}

module.exports = { getAllVideos, addNewVideo, getVideoById, updateVideoById, deleteVideoById };