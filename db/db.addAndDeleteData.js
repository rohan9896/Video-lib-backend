const mongoose = require("mongoose");
const { allVideosData, categorywiseVideoData } = require("./videosData");
const Video = require("../models/video-model");

const addAllVideosData = async () => {
  for (let video of allVideosData) {
    let newVideo = new Video(video);
    await newVideo.save();
  }
  console.log("Videos added successfully, nwo comment this function call to avoid adding videoData twice!")
}

const deleteAllVideosData = async () => {
  try {
    await Video.deleteMany({})
    console.log("deleted all videos succesfully");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { addAllVideosData, deleteAllVideosData };