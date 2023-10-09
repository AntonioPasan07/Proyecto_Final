require('dotenv').config();
const express = require("express");
const cookiParser = require('cookie-parser')
const errors = require('./misc/errors')
const {db,cors: options } = require('./configs/index')
const cors = require('cors')
const app = express();


app.use(cors(options))
app.use(express.json());
app.use(cookiParser())
const routes = require('./routes');
app.use(routes(db));

const PORT = process.env.PORT ?? 4000
app.use((req, res, next) => {
  next(errors[404]);
});
  
  app.use(({ statusCode, error }, req, res, next) => {
    res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  });
app.listen(PORT,()=> {
    console.log(`Ejemplo app listening on port${PORT}`)
});