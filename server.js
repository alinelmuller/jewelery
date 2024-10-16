const express = require("express");
const db = require("./db");
const brandController = require("./controllers/brandController");
const jewelryController = require("./controllers/jewelryController");

// Need to add cors for script.js to work - Pedro
const cors = require("cors");

const PORT = process.env.PORT || 3002;
const app = express();

const bodyParser = require("body-parser");
const logger = require("morgan");

// the app call for cors - Pedro
app.use(cors());

app.use(logger("dev"));
app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

//CRUD for Brands
app.get("/brands", brandController.getAllBrands);

//CRUD for Jewleries
app.get("/jeweleries", jewelryController.getAllJeweleries);
app.put("/brands/:id", brandController.updateBrand);
app.delete("/brands/:id", brandController.deleteBrand);
app.get("/brands/:brandName", brandController.getBrandByName);
app.get("/brands", brandController.getAllBrands);
app.post("/brands", brandController.createBrand);

//CRUD for Jewleries
app.put("/jeweleries/:id", jewelryController.updateJewelery);
app.delete("/jeweleries/:id", jewelryController.deleteJewelery);
app.get("/jeweleries/:jeweleryName", jewelryController.getJeweleryByName);
app.get("/jeweleries", jewelryController.getAllJeweleries);
app.post("/jeweleries", jewelryController.createJewelery);
