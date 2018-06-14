const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();



app.use(bodyParser.urlencoded({ extended: true }));


var db = require('./app/db/index.js');

require('./app/routes/index.js')(app, db);

app.listen(process.env.PORT || 9000, () => {
  console.log('We are live on ' + process.env.PORT || 9000);
});