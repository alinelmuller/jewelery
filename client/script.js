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
});
