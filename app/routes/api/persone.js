module.exports = (app, db) => {


  app.get('/persone', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */


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

  app.get('/getPersona', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */



    db.persone_db.getPersona({

    
      fiscale: req.query.fiscale,
    

    })
    .then((risultato) => {
      res.send(risultato);
    });


  });

  app.get('/modifica_persona', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */


    console.log("persone::modifica_persona", req.query);

    db.persone_db.modifica({

      nome: req.query.nome,
      cognome: req.query.cognome,
      fiscale: req.query.fiscale,
      img: req.query.img,

    })
    .then((risultato) => {
      res.send(risultato);
    });


  });

  app.get('/elimina_Persona', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */


    console.log("persone::elimina_persona", req.query);

    db.persone_db.modifica(req.query.fiscale).then((risultato) => {
      res.send(risultato);
    });


  });


  app.post('/rimuovi_persona', (req, res) => {

    /***************** TRUST-ME PART */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    /***************** TRUST-ME PART */


    db.persone_db.deleteById(
      
      req.query._id

    )
    .then((risultato) => {
      res.send(risultato);
    });


  });



}


