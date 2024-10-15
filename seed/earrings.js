const db = require("../db");
const { Earring } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const earringData = [
    {
      name: "Gold Hoop Earrings",
      price: 500,
      material: "Gold",
      description: "Classic 18K gold hoop earrings perfect for everyday wear.",
      stock: 15,
      category: "Earrings",
      image: "https://example.com/gold-hoop-earrings.jpg",
    },
    {
      name: "Silver Stud Earrings",
      price: 200,
      material: "Silver",
      description:
        "Simple and elegant silver stud earrings for a timeless look.",
      stock: 30,
      category: "Earrings",
      image: "https://example.com/silver-stud-earrings.jpg",
    },
    {
      name: "Diamond Drop Earrings",
      price: 2500,
      material: "White Gold",
      description:
        "Luxurious white gold drop earrings adorned with brilliant diamonds.",
      stock: 5,
      category: "Earrings",
      image: "https://example.com/diamond-drop-earrings.jpg",
    },
    {
      name: "Rose Gold Dangle Earrings",
      price: 700,
      material: "Rose Gold",
      description:
        "Charming rose gold dangle earrings with delicate detailing.",
      stock: 10,
      category: "Earrings",
      image: "https://example.com/rose-gold-dangle-earrings.jpg",
    },
    {
      name: "Platinum Stud Earrings",
      price: 1200,
      material: "Platinum",
      description:
        "Elegant platinum stud earrings featuring round-cut diamonds.",
      stock: 8,
      category: "Earrings",
      image: "https://example.com/platinum-stud-earrings.jpg",
    },
  ];
  await Earring.insertMany(earringData);
  console.log("Earrings Saved:");
};

const run = async () => {
  await main();
  db.close();
};

run();
