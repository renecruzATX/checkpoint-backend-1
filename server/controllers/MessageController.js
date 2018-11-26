const MessageModel = require("../models/MessageModel");

module.exports.list = function list(req, res) {
    MessageModel.find().exec()
        .then((messages) => {
            return res.json(messages);
        });
    
}
module.exports.show = function show(req, res) {
    MessageModel.findById(req.params.id).exec()
        .then((messages) => {
            return res.json(messages);
        });
}
module.exports.create = function create(req, res) {
    const message = new MessageModel(req.body);
    message.save().then(newMessage => {
        res.json(newMessage);
    });
}