const host = "lallah.db.elephantsql.com";
const database = "isstuojz";
const user = "isstuojz";
const password = "oVLpWiWR_4luHq4CVdRimIPiLfPnN-Td";

const pgp = require('pg-promise') ({
    query: function (event) {
        console.log("QUERY:", event.query);    
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}
const db =  pgp(options);

module.exports = db;
