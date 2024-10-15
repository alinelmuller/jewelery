const db = require("../db");
const { Necklace } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const necklaceData = [
    {
      name: "18K Gold Heart Pendant Necklace",
      price: 1200,
      material: "Gold",
      description:
        "A romantic 18K gold necklace featuring a heart-shaped pendant with diamonds.",
      stock: 10,
      category: "Necklace",
      image: "https://example.com/gold-heart-pendant-necklace.jpg",
    },
    {
      name: "Silver Infinity Necklace",
      price: 300,
      material: "Silver",
      description:
        "A delicate silver necklace with an infinity symbol pendant, representing eternal love.",
      stock: 20,
      category: "Necklace",
      image: "https://example.com/silver-infinity-necklace.jpg",
    },
    {
      name: "Platinum Diamond Choker",
      price: 3500,
      material: "Platinum",
      description:
        "A luxurious platinum choker adorned with round-cut diamonds for a stunning look.",
      stock: 5,
      category: "Necklace",
      image: "https://example.com/platinum-diamond-choker.jpg",
    },
    {
      name: "Pearl and Gold Necklace",
      price: 800,
      material: "Gold",
      description:
        "An elegant gold necklace with a single large pearl as the centerpiece.",
      stock: 8,
      category: "Necklace",
      image: "https://example.com/pearl-gold-necklace.jpg",
    },
    {
      name: "Silver Star Necklace",
      price: 200,
      material: "Silver",
      description:
        "A simple yet charming silver necklace with a star-shaped pendant.",
      stock: 25,
      category: "Necklace",
      image: "https://example.com/silver-star-necklace.jpg",
    },
  ];
  await Necklace.insertMany(necklaceData);
  console.log("Necklaces Saved:");
};

const run = async () => {
  await main();
  db.close();
};

run();
