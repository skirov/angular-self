var todo = require('../models/todoModel');

var todoController = {
    getAll: function (req, res, next) {
        todo.find(function (err, data) {
            if (err) {
                res.send(err);
            }

            res.json(data);
        });
    },

    create: function (req, res, next) {
        var params = {
            text: req.body.text
        };

        todo.create(params, function (err, data) {
            if (err) {
                res.send(err);
            }

            res.json(data);
        });
    }
};

module.exports = todoController;