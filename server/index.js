const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const fs = require("fs");
const fetch = require("node-fetch");

mongoose.connect("mongodb://renec:password1@ds163013.mlab.com:63013/checkpoint-backend-1");

const MessageRoutes = require("./routes/MessageRoutes");
const OrderRoutes = require("./routes/OrderRoutes");
const TaskRoutes = require("./routes/TaskRoutes");

const app = express();

app.use(bodyParser.json());

app.get('/dateTime', (req, res) => res.send(new Date()));

fs.readFile('./data.csv', 'utf8', (err, data) => {
    if(err) throw err;
    const dataSent = data.split('\n');
    const dataNums = dataSent[1].split(',');

    app.get('/newComments', (req, res, next) => {
        res.send(dataNums[0]);
    });
    app.get('/newTasks', (req, res, next) => {
        res.send(dataNums[1]);
    });
    app.get('/newOrders', (req, res, next) => {
        res.send(dataNums[2]);
    });
    app.get('/tickets', (req, res, next) => {
        res.send(dataNums[3]);
    });
});

app.use("/messages", MessageRoutes);
app.use("/orders", OrderRoutes);
app.use("/tasks", TaskRoutes);

app.get('/foxes', (req, res) => {
    fetch('https://randomfox.ca/floof')
        .then(res => res.json())
        .then(json => {
            res.json(json.image)
        })
});

app.listen(3001, () => console.log('server started at localhost:3001'));