const express    = require('express');
const app        = express();
const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to the api!' });
});

app.use('/myApi', router);

app.listen(port);
console.log('All the magic is happening on port ' + port);
