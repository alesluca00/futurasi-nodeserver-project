const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();



app.use(bodyParser.urlencoded({ extended: true }));


var db = require('./app/db');
require('./app/routes')(app, db);

app.listen(8000, () => {
  console.log('We are live on ' + 8000);
});