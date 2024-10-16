// /*-----------------{Global Variables}-----------------*/
const categoryTitle = document.querySelector(`#catergory-title`);

const productImage = document.querySelector(`#product-image`);
const brandImage = document.querySelector(`#brand-image`);

const productPriceTag = document.querySelector(`#price-of-product`);
const productName = document.querySelector(`#product-name`);
const productDescription = document.querySelector(`#product-description`);

// const brandOfProduct = document.querySelector(`#product-brand`);
// const originOfBrand = document.querySelector(`#brand-origin`);
// /*--------------------{Functions}---------------------*/
async function fetchAllJewelry() {
  try {
    const res = await axios.get(`http://localhost:3002/jeweleries`);
    const apiLibrary = res.data;
    console.log(apiLibrary);

    apiLibrary.forEach((api) => {
      categoryTitle.textContent = api.category;

      productImage.src = api.image;
      productImage.alt = `${api.name} image`;

      productName.textContent = api.name;
      productPriceTag.textContent = `$${api.price}`;
      productDescription.textContent = api.description;

      // async function fetchAllBrands() {
      //   try {
      //     const brandRes = await axios.get(
      //       `http://localhost:3002/brands/${api.brand}`
      //     );
      //     const brandData = brandRes.data;

      //     brandOfProduct.textContent = brandData.name;
      //     originOfBrand.textContent = brandData.origin;
      //   } catch (brandE) {
      //     console.error(`Error fetching brand:`, brandE);
      //     // The URL is not built MUST remember to add it in later!
      //     brandOfProduct.textContent = `404 Error | Please search again at our <a href="Place holder for our URL">home page.</a>`;
      //   }
      // }
      // fetchAllBrands();
    });
  } catch (e) {
    console.error("Error fetching jewelry:", e);
  }
}

// /*--------------{Running Function/Logs}---------------*/
fetchAllJewelry();
