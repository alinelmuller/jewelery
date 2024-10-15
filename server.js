const express = require("express");
const db = require("./db");
//const plantController = require('./controllers/plantController')

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
