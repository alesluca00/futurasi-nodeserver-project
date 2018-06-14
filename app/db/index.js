var colori_db = require('./colori_db/colori_db');
var persone_db = require('./persone_db/persone_db');




module.exports = {
    colori_db : new colori_db(),
    persone_db : new persone_db()

};