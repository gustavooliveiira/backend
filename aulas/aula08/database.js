// objeto do cliente do mongodb
const { MongoClient } = require("mongodb");
// string de conexão
const url = "mongodb+srv://gustavo:admin@gustavo.jb9mbsk.mongodb.net/";


const client = new MongoClient(url);

async function conecta(){
    try {
       await client.connect();
       return client.db("agenda")
    } catch (e){
        console.log("Erro ao conectar no MongoDB!", e.message);
    }
}


module.exports = conecta;