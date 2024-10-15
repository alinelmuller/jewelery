const express = require("express");
const db = require("./db");
const brandController = require ('./controllers/brandController')
const jeweleryController = require ('./controllers/jewleryController')
//const plantController = require('./controllers/plantController')

const PORT = process.env.PORT || 3002;
const app = express();

const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(logger('dev'))
app.use(bodyParser.json())
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

//CRUD for Brands
app.put('/brands/:id', brandController.updateBrand)
app.delete('/brands/:id', brandController.deleteBrand)
app.get('/brands/:brandName', brandController.getBrandByName)
app.get('/brands', brandController.getAllBrands)
app.post('/brands', brandController.createBrand)

//CRUD for Jewleries
app.put('/jeweleries/:id', jeweleryController.updateJewelery)
app.delete('/jeweleries/:id', jeweleryController.deleteJewelery)
app.get('/jeweleries/:jeweleryName', jeweleryController.getJeweleryByName)
app.get('/jeweleries', jeweleryController.getAllJeweleries)
app.post('/jeweleries', jeweleryController.createJewelery)