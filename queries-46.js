const User = require("./models").user;
const Tag = require("./models").tag;
const { todoItem: TodoItem, todoList: List } = require("./models");

const oneUser = async id => {
  const user = await User.findByPk(id); // => {} || null
  console.log(user.get({ plain: true }));
};

const importantItems = async () => {
  try {
    const items = await TodoItem.findAll(); // => []
    console.log(items.map(i => i.get({ plain: true })));
  } catch (e) {
    console.log(e.message);
  }
};

importantItems();

const newUser = async (myName, email, password) => {
  try {
    const newUser = await User.create({ name: myName, email, password });
    console.log(newUser.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

// newUser("Rein", "rein@r.com", "1234");

// updating data

const changeName = async (id, newName) => {
  const userToUpdate = await User.findByPk(id);
  // maybe the guy doesn't exist => 404
  await userToUpdate.update({ name: newName });
  console.log(userToUpdate);
};

// changeName(1, "kelley");

// deleting data

const deleteUser = async id => {
  const userToDelete = await User.findByPk(id);
  await userToDelete.destroy();
};

// deleteUser(1);

const itemsAndTags = async () => {
  try {
    const allItems = await TodoItem.findAll({ include: [Tag] });
    const cleanedArray = allItems.map(i => i.get({ plain: true }));
    console.log(cleanedArray[0]);
  } catch (e) {
    console.log(e.message);
  }
};

itemsAndTags();
