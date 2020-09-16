const TodoList = require("./models").todoList;
const User = require("./models").user;

const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json()); //body-parser

app.get("/lists", async (req, res) => {
  try {
    console.log("request recieved!");
    const lists = await TodoList.findAll();
    console.log("sending data back!");
    res.json(lists);
  } catch (e) {
    console.log(e.message);
  }
});

app.post("/users", async (request, response, next) => {
  try {
    console.log("body", request.body);
    const { email, name, phone } = request.body;
    if (!email) {
      response.status(400).send("email must be provided");
    } else {
      const newUser = await User.create({ email, name, phone });
      // BODY of the request.
      // name, email, phone
      response.json(newUser);
    }
    // USer Model and .create
    // respond with the new user
  } catch (error) {
    next(error);
  }
});

app.put("/users/:id", async (req, res, next) => {
  try {
    console.log("req params", req.params);
    console.log("req body", req.body);

    // validate params
    const { name } = req.body;
    if (!name) {
      return res.status(400).send("missing name");
    }

    // Find the user
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).send(`User with id: ${req.params.id} not found`);
    }

    // update him
    await user.update({ name });
    // console.log(user.get({ plain: true }));
    // respond
    res.json(user);
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log("server running!"));
