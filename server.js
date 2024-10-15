const express = require("express");
const db = require("./db");
const brandController = require ('./controllers/brandController')
const jeweleryController = require ('./controllers/jewleryController')
//const plantController = require('./controllers/plantController')

const PORT = process.env.PORT || 3002;
const app = express();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

//CRUD for Brands
app.get('/brands', brandController.getAllBrands)

//CRUD for Jewleries
app.get('/jeweleries', jeweleryController.getAllJeweleries)