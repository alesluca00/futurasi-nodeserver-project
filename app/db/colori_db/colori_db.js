var db = require('node-localdb');

module.exports = class ColoriDB {

    constructor() {
        this.coloriDB = db('app/db/colori_db/colori_db.json');
    }

    inserisci(colori) {
        return this.coloriDB.insert(colori).then((u) => {
            return u;
        });
    }

    findAll() {
        return this.coloriDB.find().then((u) => {
            return u;
        });
    }

    deleteById(value) {
        return this.coloriDB.remove({value: value}).then((u) => {
            return u;
        });
    }
 
}