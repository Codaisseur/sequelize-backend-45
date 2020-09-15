const express = require("express");
const TodoList = require("./models").todoList;
const app = express();
const PORT = 4000;

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

app.listen(PORT, event => console.log("server running!"));
