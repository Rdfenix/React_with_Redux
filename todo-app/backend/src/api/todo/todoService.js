const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({new: true, runValidate: true});

module.exports = Todo;