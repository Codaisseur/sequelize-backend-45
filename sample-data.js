const TodoItem = require("./models").todoItem;

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean bedroom",
      important: false,
    });
    const todo2 = await TodoItem.create({
      task: "Learn to code",
      important: true,
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      important: true,
    });

    return [todo1, todo2, todo3].map(item => item.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

createSampleTodoItems().then(todos => console.log(todos));

/*
[
        {
          title: "urgent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "work related",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],


           [
        {
          tagId: 1,
          todoItemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          todoItemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          todoItemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          todoItemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          todoItemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],




*/
