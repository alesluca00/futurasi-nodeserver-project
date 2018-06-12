var db = require('node-localdb');

module.exports = class PersoneDB {

    constructor() {
        this.utentiDB = db('app/db/persone_db/persone_db.json');
    }

    inserisci(utente) {
        return this.utentiDB.insert(utente).then((u) => {
            return u;
        });
    }

    findAll() {
        return this.utentiDB.find().then((u) => {
            return u;
        });
    }

    deleteById(fiscale) {
        return this.utentiDB.remove({fiscale: fiscale}).then((u) => {
            return u;
        });
    }
 
}