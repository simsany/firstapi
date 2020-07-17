var db=require('../models');

exports.getTodos=function (req, res) {
  db.Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.send(err));
}

exports.createTodos=function (req, res) {
  db.Todo.create(req.body)
    .then((newTodos) => res.json(newTodos))
    .catch((err) => res.send(err));
}
exports.showTodos=function (req, res) {
  db.Todo.findById(req.params.todoId)
    .then((newTodos) => res.json(newTodos))
    .catch((err) => res.send(err));
}

exports.updateTodos=function (req, res) {
  db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
    .then((foundTodo) => res.json(foundTodo))
    .catch((err) => res.send(err));
}

exports.deleteTodos=function (req, res) {
  db.Todo.findByIdAndRemove(req.params.todoId)
    .then((foundTodo) => res.json("deleted"))
    .catch((err) => res.send(err));
}