const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

mongoose.connect("mongodb://renec:password1@ds163013.mlab.com:63013/checkpoint-backend-1");

const MessageRoutes = require("./routes/MessageRoutes");
const OrderRoutes = require("./routes/OrderRoutes");
const TaskRoutes = require("./routes/TaskRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/messages", MessageRoutes);
app.use("/orders", OrderRoutes);
app.use("/tasks", TaskRoutes);

app.listen(3001, () => console.log('server started at localhost:3001'));