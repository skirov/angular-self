var mongoose = require('mongoose');

var todoModel = mongoose.model('TodoModel', {
    text: String
}, 'todo-db');

module.exports = todoModel;