var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StateSchema   = new Schema({
  name: String,
  governor: String,
  senators: Array
});

module.exports = mongoose.model('State', StateSchema);
