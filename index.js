require('dotenv').config();
const express = require("express");

const db = require('./configs/db')
const app = express();

app.use(express.json());

const routes = require('./routes');
app.use(routes(db));


app.use((req, res, next) => {
    next({
      statusCode: 404,
      error: new Error ('path not found'),
    });
  });
  
  app.use(({ statusCode, error }, req, res, next) => {
    res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  });
app.listen(process.env.PORT,()=> {
    console.log(`Ejemplo app listening on port${process.env.PORT}`)
});