// /*-----------------{Global Variables}-----------------*/
const earingsPriceTag = document.querySelector(`.earing-price`);
const earingsDescription = document.querySelector(`.earing-description`);
const braceletsPriceTag = document.querySelector(`.bracelet-price`);
const braceletsDescription = document.querySelector(`.bracelet-description`);
const ringsPriceTag = document.querySelector(`.ring-price`);
const ringsDescription = document.querySelector(`.ring-description`);
const necklacesPriceTag = document.querySelector(`.necklace-price`);
const necklacesDescription = document.querySelector(`.necklace-description`);

const itemContainer = document.querySelectorAll(`.card`);

// /*--------------------{Functions}---------------------*/
async function fetchAllJewelry() {
  try {
    const res = await axios.get(`http://localhost:3004/jeweleries`);
    const apiLibrary = res.data;

    const container = document.querySelector(".container");

    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("item", "card");

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = "Product Image";
      img.classList.add("card-image");

      const cardInfo = document.createElement("div");
      cardInfo.classList.add("card-info");

      const title = document.createElement("h3");
      title.classList.add("card-title");
      title.textContent = product.name;

      const description = document.createElement("p");
      description.classList.add("card-description");
      description.textContent = product.description;

      const price = document.createElement("div");
      price.classList.add("card-price");
      price.textContent = product.price;

      cardInfo.appendChild(title);
      cardInfo.appendChild(description);
      cardInfo.appendChild(price);

      card.appendChild(img);
      card.appendChild(cardInfo);

      container.appendChild(card);
    });
  } catch (e) {
    console.error("Error fetching jewelry:", e);
  }
}

fetchAllJewelry();

// /*--------------{Running Function/Logs}---------------*/
function setupCarousel(sectionId) {
  const section = document.getElementById(sectionId);
  const carousel = section.querySelector(".carousel");
  const items = section.querySelectorAll(".item");
  const leftButton = section.querySelector(".left");
  const rightButton = section.querySelector(".right");

  let currentIndex = 0;
  const totalItems = items.length;

  function updateCarousel() {
    items.forEach((item, index) => {
      item.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  }

  leftButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    updateCarousel();
  });

  rightButton.addEventListener("click", () => {
    currentIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  updateCarousel();
}

document.addEventListener("DOMContentLoaded", () => {
  setupCarousel("earings");
  setupCarousel("bracelets");
  setupCarousel("rings");
  setupCarousel("necklaces");
