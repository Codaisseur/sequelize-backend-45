const User = require("./models").user;
const TodoItem = require("./models").todoItem;

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    console.log(users.map(u => u.get({ plain: true })));
  } catch (e) {
    console.log(e.message);
  }
};

const getUserById = async id => {
  try {
    const user = await User.findByPk(id);
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
};

const getImportantTodoItems = async () => {
  try {
    const items = await TodoItem.findAll({
      where: {
        important: true,
      },
    });
    console.log(items.map(i => i.get({ plain: true })));
  } catch (e) {
    console.log(e.message);
  }
};

getImportantTodoItems();

/*
findAll() => []
findByPk() => {} || null || undefined
findAndCountAll() => [] with some other information
*/
