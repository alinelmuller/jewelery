let carousel = document.querySelector(".carousel");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let items = document.querySelectorAll(".item"); // Selects all items

(function () {
  right.addEventListener("click", function () {
    let itemWidth = items[0].clientWidth; // Assume all items have the same width
    carousel.scrollLeft += itemWidth;
  });

  left.addEventListener("click", function () {
    let itemWidth = items[0].clientWidth; // Assume all items have the same width
    carousel.scrollLeft -= itemWidth;
  });
})();
