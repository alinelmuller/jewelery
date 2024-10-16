/* ------------{Global Variables}---------------- */
const Brand = require(`../models/brand`);
const Jewelery = require(`../models/jewelery`);
const button = document.querySelector(`#submit`);
const priceOfProduct = document.querySelector(`#price-of-product`);
const productMenuDrop = document.querySelector(`#see-more-button`);
const productName = document.querySelector(`#product-name`);
const productDescription = document.querySelector(`#product-description`);
/* ------------{Functions}---------------- */
async function userSearchForProduct(name) {
  const res = await axios.get(`http://localhost:3002/jeweleries/${name}`);
}
/* ------------{Event Listeners}---------------- */
