const db = require("../db");
const { Bracelet } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const braceletData = [
    {
      name: "Gold Bangle Bracelet",
      price: 600,
      material: "Gold",
      description:
        "A stunning 18K gold bangle bracelet with a polished finish.",
      stock: 12,
      category: "Bracelet",
      image: "https://example.com/gold-bangle-bracelet.jpg",
    },
    {
      name: "Silver Cuff Bracelet",
      price: 300,
      material: "Silver",
      description: "Stylish silver cuff bracelet with intricate designs.",
      stock: 20,
      category: "Bracelet",
      image: "https://example.com/silver-cuff-bracelet.jpg",
    },
    {
      name: "Platinum Charm Bracelet",
      price: 1500,
      material: "Platinum",
      description: "Elegant platinum bracelet with customizable charms.",
      stock: 8,
      category: "Bracelet",
      image: "https://example.com/platinum-charm-bracelet.jpg",
    },
    {
      name: "Leather Wrap Bracelet",
      price: 100,
      material: "Leather",
      description: "Casual leather wrap bracelet perfect for everyday wear.",
      stock: 25,
      category: "Bracelet",
      image: "https://example.com/leather-wrap-bracelet.jpg",
    },
    {
      name: "Rose Gold Chain Bracelet",
      price: 700,
      material: "Rose Gold",
      description: "Beautiful rose gold chain bracelet with a modern design.",
      stock: 15,
      category: "Bracelet",
      image: "https://example.com/rose-gold-chain-bracelet.jpg",
    },
  ];
  await Bracelet.insertMany(braceletData);
  console.log("Bracelets Saved:");
};

const run = async () => {
  await main();
  db.close();
};

run();
