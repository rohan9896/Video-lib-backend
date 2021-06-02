const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema({
  videoid: String,
  thumbnail: String,
  title: String,
  videoLength: String,
  channel: String,
  channelImg: String,
  link: String,
  category: String,
  liked: {
    type: Boolean,
    default: false
  },
  disliked: {
    type: Boolean,
    default: false
  },
  views: Number,
  monthsAgo: Number
});

module.exports = mongoose.model("Video", videoSchema);

