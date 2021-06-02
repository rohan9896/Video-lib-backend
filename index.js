const express = require('express');
const { connectDb } = require("./db/db.connect");
const { addAllVideosData, deleteAllVideosData } = require("./db/db.addAndDeleteData")
const path = require('path');

//middlewares
const bodyParser = require('body-parser');
var cors = require('cors')
const { routeNotFoundHandler } = require("./middlewares/route-not-found-handler")
const { errorHandler } = require("./middlewares/error-handler")

const app = express();
app.use(bodyParser.json());
app.use(cors());

connectDb()

// addAllVideosData()
// deleteAllVideosData()


const videosRouter = require("./router/videos.router");
const categoryRouter = require("./router/category-videos.router")

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/docsPage.html'))
});

app.use("/videos", videosRouter)
app.use("/categories", categoryRouter)

//Error 404 route handler
app.use(routeNotFoundHandler);

//Error handler
app.use(errorHandler);

app.listen(3000, () => {
  console.log('server started');
});