const Jewelery = require("../models/jewelery");

const getAllJeweleries = async (req, res) => {
    try {
      const jeweleries = await Jewelery.find();
      res.json(jeweleries);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getJeweleryByName = async (req, res) => {
    try {
      const { jeweleryName } = req.params;
      const jewelery = await Jewelery.findOne({ name: jeweleryName });
  
      if (jewelery) {
        res.status(200).json(jewelery);
      } else {
        res.status(404).json({ message: "Jewelery not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Server Error" });
    }
  };

  const createJewelery = async (req, res) => {
    try {
      const jewelery = new Jewelery(req.body);
      console.log("req.body", req.body, "brand", jewelery);
     let saved = await jewelery.save();
     console.log('saved',saved)
      return res.status(201).json({ jewelery });
    } catch (error) {
      return res.json({ error: error.message });
    }
  };

  const updateJewelery = async (req, res)=>{
    try{
let {id} = req.params
let jewelery= await Jewelery.findByIdAndUpdate(id, req.body, {new:true})
if(jewelery){
    return res.status(200).json(jewelery)
}
throw new Error("Brand not found")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteJewelery = async (req,res)=>{
    try{
const {id} = req.params
const deleted = await Jewelery.findByIdAndDelete(id)
if (deleted){
    return res.status(200).send("Jewelery deleted")
}
throw new Error("Jewelery not found")
    }catch(error){
        return res.status(500).send(error.message)
    }
}
  module.exports ={
    getAllJeweleries,
    getJeweleryByName,
    createJewelery,
    updateJewelery,
    deleteJewelery
  }