const loggingMiddleware = (req, res, next) => {
  // console.log("the body of the request", request.body);
  console.log("A request just came through", new Date());
  res.setHeader("Matias-Time", new Date());
  next();
};

const randomBlockMiddleware = (req, res, next) => {
  const randomNr = Math.random() * 10;
  if (randomNr > 4) {
    res.status(401).send("unauthorized by the middleware randomly");
  } else {
    next();
  }
};

module.exports = { loggingMiddleware, randomBlockMiddleware };
