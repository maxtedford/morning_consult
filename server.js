const express    = require('express');
const app        = express();
const port = process.env.PORT || 8080;
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var State = require('./app/models/state');

MongoClient.connect("mongodb://localhost:27017", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to the api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /myApi
app.use('/myApi', router);

app.listen(port);
console.log('All the magic is happening on port ' + port);
