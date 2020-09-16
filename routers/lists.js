const { Router } = require("express");
const TodoList = require("../models").todoList;
const router = new Router();

router.get("/", async (req, res) => {
  try {
    console.log("request recieved!");
    const lists = await TodoList.findAll();
    console.log("sending data back!");
    res.json(lists);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
