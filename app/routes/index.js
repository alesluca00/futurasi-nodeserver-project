var APIPersone = require('./api/persone');
var APIColori = require('./api/colori');



module.exports = function(app, db) {

  app.get('/getPersona', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */


    res.send("SERVER IN NODE JS!");
    


  });






  APIPersone(app, db);
  APIColori(app, db);

};