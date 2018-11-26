const TaskModel = require("../models/TaskModel");

module.exports.list = function list(req, res) {
    TaskModel.find().exec()
        .then((tasks) => {
            return res.json(tasks);
        });
    
}
module.exports.show = function show(req, res) {
    TaskModel.findById(req.params.id).exec()
        .then((tasks) => {
            return res.json(tasks);
        });
}
module.exports.create = function create(req, res) {
    const task = new TaskModel(req.body);
    task.save().then(newTask => {
        res.json(newTask);
    });
}