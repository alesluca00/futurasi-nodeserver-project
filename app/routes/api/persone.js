module.exports = (app, db) => {


  app.get('/persone', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */

    console.log("ehi");

    db.persone_db.findAll().then((risultato) => {
      res.send(risultato);
    });


  });

  app.post('/inserisci_persona', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */



    db.persone_db.inserisci({
      nome: req.query.nome,
      cognome: req.query.cognome,
      fiscale: req.query.fiscale,
      img: req.query.img,
    })
    .then((risultato) => {
      res.send(risultato);
    });


  });


  app.post('/remove_persona', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */


    db.persone_db.inserisci({
      id: req.query.id,
    })
    .then((risultato) => {
      res.send(risultato);
    });


  });



}


