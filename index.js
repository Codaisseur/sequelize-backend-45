const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4001;

const userRouter = require("./routers/user");

const logMyRequestMiddleware = (req, res, next) => {
  console.log("request recieved", req.headers);
  // check the authorization of the request
  //
  next();
};

// Middlewares
// 1. At route level
// 2. At app level
app.use(express.json()); // body=parser
app.use(logMyRequestMiddleware); // at app level

// Routers
app.use("/users", userRouter);
// app.use('/lists', todoListRouter);

app.listen(PORT, () => console.log(`up and running on ${PORT}`));
