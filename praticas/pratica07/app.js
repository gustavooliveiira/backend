require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DBNAM}`

mongoose.connect(url)
.then(()=>{console.log('Conectado no MongoDB')})
.catch((err)=>{console.log('Erro ao conectar: ', err.message);});

const app = express();

const produtosRouter = require("./routes/produtosRouter");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/produtos', produtosRouter); 

module.exports = app;