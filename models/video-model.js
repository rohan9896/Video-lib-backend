const mongoose = require("mongoose");
const { Schema } = mongoose;
require('mongoose-type-url');

const videoSchema = new Schema({
  videoid: {
    type: String,
    required: [true, 'Videoid is required'],
    unique: true
  },
  thumbnail: {
    type: mongoose.SchemaTypes.Url,
    default: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/main/icons/videoLib/noImageAvailable.png",
  },
  title: {
    type: String,
    required: [true, 'title is required']
  },
  videoLength: {
    type: String,
    default: "00:00"
  },
  channel: {
    type: String,
    required: [true, 'Channel name is required']
  },
  channelImg: {
    type: mongoose.SchemaTypes.Url,
    default: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/381a3bddf3e3dd07d18515294bc568756a913b00/icons/avatar%20component/avatarMan.svg"
  },
  link: {
    type: mongoose.SchemaTypes.Url,
    required: [true, 'link is required'],
    unique: true
  },
  category: {
    type: String,
    required: [true, 'category is required']
  },
  liked: {
    type: Boolean,
    default: false
  },
  disliked: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  monthsAgo: {
    type: Number,
    default: 0
  }
},
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;

