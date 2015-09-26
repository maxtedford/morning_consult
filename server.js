const express    = require('express');
const app        = express();
const port = process.env.PORT || 8080;
const router = express.Router();
const mongoose = require('mongoose');
var State = require('./app/models/state');

mongoose.connect('mongodb://ds051853.mongolab.com:51853/morning_consult_db');

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
