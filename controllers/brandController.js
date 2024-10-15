const Brand = require("../models/brand");

const getAllBrands = async (req, res) => {
    try {
      const brands = await Brand.find();
      res.json(brands);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getBrandByName = async (req, res) => {
    try {
      const { brandName } = req.params;
      const brand = await Brand.findOne({ name: brandName });
  
      if (brand) {
        res.status(200).json(brand);
      } else {
        res.status(404).json({ message: "Brand not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Server Error" });
    }
  };

  const createBrand = async (req, res) => {
    try {
      const brand = new Brand(req.body);
      console.log("req.body", req.body, "brand", brand);
     let saved = await brand.save();
     console.log('saved',saved)
      return res.status(201).json({ brand });
    } catch (error) {
      return res.json({ error: error.message });
    }
  };

  const updateBrand = async (req, res)=>{
    try{
let {id} = req.params
let brand= await Brand.findByIdAndUpdate(id, req.body, {new:true})
if(brand){
    return res.status(200).json(brand)
}
throw new Error("Brand not found")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteBrand = async (req,res)=>{
    try{
const {id} = req.params
const deleted = await Brand.findByIdAndDelete(id)
if (deleted){
    return res.status(200).send("Brand deleted")
}
throw new Error("Brand not found")
    }catch(error){
        return res.status(500).send(error.message)
    }
}


  module.exports ={
    getAllBrands,
    getBrandByName,
    createBrand,
    updateBrand,
    deleteBrand
  }