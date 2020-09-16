const { Router } = require("express");
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  console.log("im in the router!!!");
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (request, response, next) => {
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

router.put("/:id", async (req, res, next) => {
  console.log("im in the router!!!");
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

module.exports = router;
