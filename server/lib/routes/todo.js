var todoController = require('../controllers/todoController');

exports.init = function (app) {
    app.get('/api/todo/all', function (req, res, next) {
        todoController.getAll(req, res, next);
    });

    app.post('/api/todo/add', function (req, res, next) {
        todoController.create(req, res, next);
    });
}
