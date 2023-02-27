//index.js is the same as server.js on unit 1 assignment
require('dotenv').config();

const express = require('express') //Import Express
const cors = require('cors');
const app = express(); //Start App
const mongoose = require('mongoose'); //import mongoose
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes');

var port = process.env.PORT || 8080; //Assign port

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => res.send('Welcome to api implementation')); // initial welcome message

app.listen(port, function() // Launch app to the specified port; displays in terminal when running index.js
{
    console.log("Running API on Port "+ port);
})

let apiRoutes = require("./routes") //Import routes

app.use('/api', apiRoutes) //Use API routes in the App

let bodyParser = require('body-parser'); //import body parser

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(bodyParser.json());

/*connect to mongoose
const dbPath = 'mongodb://localhost/cuw_wsoc_2023';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})*/