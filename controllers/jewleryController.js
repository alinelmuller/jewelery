const Jewelery = require("../models/jewelery");

const getAllJeweleries = async (req, res) => {
    try {
      const jeweleries = await Jewelery.find();
      res.json(jeweleries);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  module.exports ={
    getAllJeweleries
  }