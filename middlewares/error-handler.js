const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ sucess: false, msg: "something went wromng", errMsg: err.message })
}

module.exports = { errorHandler }