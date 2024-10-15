const db = require("../db");
const { Ring } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const ringData = [
    {
      name: "18K White Gold Diamond Ring",
      price: 1500,
      material: "White Gold",
      description:
        "A classic 18k white gold ring featuring a brilliant diamond centerpiece.",
      stock: 5,
      category: "Ring",
      image: "https://example.com/white-gold-diamond-ring.jpg",
    },
    {
      name: "Rose Gold Engagement Ring",
      price: 2000,
      material: "Rose Gold",
      description:
        "An elegant rose gold ring with a round-cut diamond, perfect for engagements.",
      stock: 10,
      category: "Ring",
      image: "https://example.com/rose-gold-engagement-ring.jpg",
    },
    {
      name: "Platinum Eternity Band",
      price: 2500,
      material: "Platinum",
      description:
        "A stunning platinum eternity band adorned with pave diamonds all around.",
      stock: 3,
      category: "Ring",
      image: "https://example.com/platinum-eternity-band.jpg",
    },
    {
      name: "Yellow Gold Sapphire Ring",
      price: 1800,
      material: "Yellow Gold",
      description:
        "A unique yellow gold ring with a deep blue sapphire surrounded by diamonds.",
      stock: 7,
      category: "Ring",
      image: "https://example.com/yellow-gold-sapphire-ring.jpg",
    },
    {
      name: "Silver Vintage Signet Ring",
      price: 400,
      material: "Silver",
      description:
        "A vintage-inspired silver signet ring with intricate engravings.",
      stock: 20,
      category: "Ring",
      image: "https://example.com/silver-vintage-signet-ring.jpg",
    },
  ];
  await Ring.insertMany(ringData);
  console.log("Rings Saved:");
};

const run = async () => {
  await main();
  db.close();
};

run();
