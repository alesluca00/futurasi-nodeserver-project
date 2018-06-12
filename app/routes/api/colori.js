module.exports = (app, db) => {


  app.get('/colori', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */


    db.colori_db.findAll().then((risultato) => {
      res.send(risultato);
    });


  });

  app.post('/inserisci_colore', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */



    db.colori_db.inserisci({
      value: req.query.value
     })
    .then((risultato) => {
      res.send(risultato);
    });


  });


  app.post('/rimuovi_colore', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */


    db.colori_db.deleteById(req.query.value)
    .then((risultato) => {
      res.send(risultato);
    });


  });  
}
  
  
  