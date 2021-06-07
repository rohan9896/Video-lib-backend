const mongoose = require('mongoose')

const uri = process.env['uri']

async function connectDb() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
    console.log("db successfully connected");
  }
  catch (err) {
    console.error("db connection failed");
    console.error(err);
  }
}

module.exports = { connectDb }