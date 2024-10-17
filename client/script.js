const containerEarrings = document.querySelector(".earrings-container");
const containerBracelets = document.querySelector(".bracelets-container");
const containerRings = document.querySelector(".rings-container");
const containerNecklaces = document.querySelector(".necklaces-container");
const container = document.querySelector(".product-container");

async function fetchAllJewelry() {
  try {
    const res = await axios.get(`http://localhost:3004/jeweleries`);
    const products = res.data;

    console.log(products);

    const earrings = products.filter(
      (product) => product.category === "Earrings"
    );

    const bracelets = products.filter(
      (product) => product.category === "Bracelet"
    );

    const rings = products.filter((product) => product.category === "Ring");

    const necklaces = products.filter(
      (product) => product.category === "Necklace"
    );

    console.log("Earrings:", earrings);
    console.log("Bracelets:", bracelets);
    console.log("Rings:", rings);
    console.log("Necklaces:", necklaces);

    function createCard(product, targetContainer) {
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
      price.textContent = `$${product.price}`;

      cardInfo.appendChild(title);
      cardInfo.appendChild(description);
      cardInfo.appendChild(price);
      card.appendChild(img);
      card.appendChild(cardInfo);
      targetContainer.appendChild(card);
    }

    earrings.forEach((product) => createCard(product, containerEarrings));
    bracelets.forEach((product) => createCard(product, containerBracelets));
    rings.forEach((product) => createCard(product, containerRings));
    necklaces.forEach((product) => createCard(product, containerNecklaces));

    setupCarousel("earings");
    setupCarousel("bracelets");
    setupCarousel("rings");
    setupCarousel("necklaces");
  } catch (e) {
    console.error("Error fetching jewelry:", e);
  }
}
fetchAllJewelry;

function setupCarousel(sectionId) {
  const section = document.getElementById(sectionId);
  const carousel = section.querySelector(".carousel");
  const items = section.querySelectorAll(".item");
  const leftButton = section.querySelector(".left");
  const rightButton = section.querySelector(".right");

  let currentIndex = 0;
  const totalItems = items.length;

  leftButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    updateCarousel();
  });

  rightButton.addEventListener("click", () => {
    currentIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  function updateCarousel() {
    items.forEach((item, index) => {
      item.style.display = index === currentIndex ? "block" : "none";
    });
  }
  updateCarousel();
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAllJewelry();
});
