var APIPersone = require('./api/persone');
var APIColori = require('./api/colori');



module.exports = function(app, db) {
  APIPersone(app, db);
  APIColori(app, db);

};