var APIPersone = require('./api/persone');


module.exports = function(app, db) {
  APIPersone(app, db);
};