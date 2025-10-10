const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://gustavo_db_user:admin@gustavo.b5pv01s.mongodb.net/';

const client = new MongoClient(url);

async function conectarDB(){
    await client.connect();
    console.log('DB ON!');
    return client.db('agenda');
}

module.exports = conectarDB;