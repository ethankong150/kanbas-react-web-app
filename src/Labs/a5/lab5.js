const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

const todos = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: false },
];

const Lab5 = (app) => {
    app.get("/a5/welcome", (req, res) => {
      res.send("Welcome to Assignment 5");
    });
    app.get("/a5/add/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) + parseInt(b);
      res.send(sum.toString());
    });
    app.get("/a5/subtract/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) - parseInt(b);
      res.send(sum.toString());
    });
    app.get("/a5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/a5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
    app.get("/a5/todos", (req, res) => {
      const { completed } = req.query;
    if (completed !== undefined) {
      const completedTodos = todos.filter(
        (t) => t.completed === completed);
      res.json(completedTodos);
      return;
    }
      res.json(todos);
    });  
    app.get("/a5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      res.json(todo);
    });
    app.post("/a5/todos", (req, res) => {
      const newTodo = {
        ...req.body,
        id: new Date().getTime(),
      };
      todos.push(newTodo);
      res.json(newTodo);
    });
    app.delete("/a5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      todos.splice(todos.indexOf(todo), 1);
      res.sendStatus(200);
    });
  
    app.get("/a5/todos/:id/title/:title", (req, res) => {
      const { id, title } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      todo.title = title;
      res.json(todos);
    });
    app.put("/a5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      todo.title = req.body.title;
      todo.description = req.body.description;
      todo.due = req.body.due;
      todo.completed = req.body.completed;
      res.sendStatus(200);
    });
  
  };
  export default Lab5;