/* ------------{Global Variables}---------------- */
const Brand = require(`../models/brand`);
const Jewelery = require(`../models/jewelery`);
const 
/* ------------{Functions}---------------- */
async function fetchJeweleries(Object) {
  const res = await axios.get(`http://localhost:3002/jeweleries`);
}
/* ------------{Event Listeners}---------------- */
