const routeNotFoundHandler = (req, res) => {
  res.status(404).json({sucess: false, msg: "errorrr.."})
}

module.exports = {routeNotFoundHandler};