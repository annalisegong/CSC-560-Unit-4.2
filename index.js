//index.js is the same as server.js on unit 1 assignment
require('dotenv').config();

const express = require('express') //Import Express
const cors = require('cors');
const bodyParser = require('body-parser'); //import body parser
const mongoose = require('mongoose'); //import mongoose
const routes = require('./app/routes/routes');
const db = require('./app/models')
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const app = express(); //Start App
const mongoString = process.env.DATABASE_URL;

var corsOptions = {
    origin: "http://localhost:8080"
}

/*mongoose.connect(mongoString);
//const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})*/

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes);

app.get('/', (req, res) => res.send('Welcome to api implementation')); // initial welcome message

var port = process.env.PORT || 8080; //Assign port
app.listen(port, function() // Launch app to the specified port 8080; displays in terminal when running index.js
{
    console.log("Running API on Port "+ port);
})