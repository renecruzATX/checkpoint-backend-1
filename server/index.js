const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

mongoose.connect("mongodb://renec:password1@ds163013.mlab.com:63013/checkpoint-backend-1");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Hello Express app');
});

app.listen(3001, () => console.log('server started at localhost:3001'));