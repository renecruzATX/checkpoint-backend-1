const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
 body: {
   type: String
 }
});

const MessageModel = mongoose.model("Comment", messageSchema);
module.exports = MessageModel;