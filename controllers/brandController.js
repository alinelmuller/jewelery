const Brand = require("../models/brand");

const getAllBrands = async (req, res) => {
    try {
      const brands = await Brand.find();
      res.json(brands);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  module.exports ={
    getAllBrands
  }