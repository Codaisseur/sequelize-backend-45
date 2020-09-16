const express = require("express");
const app = express();
const PORT = 4000;

const userRouter = require("./routers/user");
const listRouter = require("./routers/lists");

const { loggingMiddleware, randomBlockMiddleware } = require("./middlewares");

// Attach Middlewares
app.use(express.json()); //body-parser
app.use(loggingMiddleware); // use middleware at application level.

// attach routers to app.
app.use("/users", userRouter);
app.use("/lists", listRouter);

app.get("/test", randomBlockMiddleware, (req, res, next) => {
  res.json("this is the testing route");
});

app.listen(PORT, () => console.log("server running!"));
