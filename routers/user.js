const { Router } = require("express");
const User = require("../models").user;
const { randomBlockMiddleware } = require("../middlewares");

const router = new Router();

router.get("/", randomBlockMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll();
    const cleanUsers = users.map(u => {
      const { password, ...restOfUser } = u.dataValues;
      return restOfUser;
    });
    res.send(cleanUsers);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const user = await User.findByPk(id);
    if (!name && !email && !phone) {
      return res.status(400).send("missing parameters");
    }
    if (!user) {
      return res.status(404).send("User with that id does not exist");
    }

    await user.update({ name });

    res.send(user);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("missing parameters");
    }
    const newUser = await User.create({ name, email, password });

    res.send(newUser);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
