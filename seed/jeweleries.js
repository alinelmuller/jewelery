const db = require("../db");
const Jeweleries = require("../models/jewelery");
const Brand = require("../models/brand");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const tiffanyBrand = await Brand.findOne({ name: "Tiffany & Co." });
  const cartierBrand = await Brand.findOne({ name: "Cartier" });
  const chopardBrand = await Brand.findOne({ name: "Chopard" });
  const bvlgariBrand = await Brand.findOne({ name: "Bvlgari" });
  const harryWinstonBrand = await Brand.findOne({
    name: "Harry Winston",
  });
  const vancleefBrand = await Brand.findOne({
    name: "Van Cleef & Arpels",
  });
  const davidYurmanBrand = await Brand.findOne({ name: "David Yurman" });
  const piagetBrand = await Brand.findOne({ name: "Piaget" });
  const graffBrand = await Brand.findOne({ name: "Graff" });
  const mikimotoBrand = await Brand.findOne({ name: "Mikimoto" });

  const jeweleries = [
    //Tiffany
    {
      name: "Tiffany Soleste Ring",
      price: 5600,
      material: "Platinum",
      description:
        "A radiant engagement ring with a stunning diamond centerpiece.",
      stock: 5,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: tiffanyBrand._id,
    },
    {
      name: "Tiffany T Wire Bracelet",
      price: 1500,
      material: "18k Gold",
      description: "Minimalist bracelet featuring the iconic Tiffany T design.",
      stock: 10,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: tiffanyBrand._id,
    },
    {
      name: "Tiffany Victoria Earrings",
      price: 12000,
      material: "Platinum, Diamond",
      description:
        "Floral-inspired earrings with a stunning diamond arrangement.",
      stock: 3,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: tiffanyBrand._id,
    },
    {
      name: "Tiffany Infinity Pendant",
      price: 800,
      material: "Sterling Silver",
      description:
        "A symbol of endless possibilities, perfect for everyday wear.",
      stock: 8,
      category: "Necklace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: tiffanyBrand._id,
    },
    {
      name: "Tiffany Key Charm",
      price: 950,
      material: "18k Gold",
      description: "Intricate key charm symbolizing knowledge and inspiration.",
      stock: 12,
      category: "Charm",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: tiffanyBrand._id,
    },

    // Cartier
    {
      name: "Cartier Love Bracelet",
      price: 6800,
      material: "18k Gold",
      description: "Iconic bracelet that symbolizes eternal love.",
      stock: 7,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: cartierBrand._id,
    },
    {
      name: "Cartier Panthère Ring",
      price: 10200,
      material: "18k Gold, Onyx",
      description: "Striking panther-inspired ring with emerald eyes.",
      stock: 4,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: cartierBrand._id,
    },
    {
      name: "Cartier Juste un Clou Necklace",
      price: 9000,
      material: "18k Rose Gold",
      description: "Elegant necklace featuring a unique nail design.",
      stock: 6,
      category: "Necklace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: cartierBrand._id,
    },
    {
      name: "Cartier Clash Earrings",
      price: 5800,
      material: "18k Rose Gold",
      description: "Edgy earrings that blend tradition with modernity.",
      stock: 5,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: cartierBrand._id,
    },
    {
      name: "Cartier Santos Watch",
      price: 7500,
      material: "Steel, Leather",
      description: "Timeless luxury watch with a sleek design.",
      stock: 2,
      category: "Watch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: cartierBrand._id,
    },

    // Chopard
    {
      name: "Chopard Happy Hearts Bracelet",
      price: 3600,
      material: "18k Rose Gold",
      description: "Delicate bracelet with heart-shaped elements and diamonds.",
      stock: 10,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: chopardBrand._id,
    },
    {
      name: "Chopard Imperiale Ring",
      price: 5400,
      material: "18k White Gold",
      description: "Elegant ring with a purple amethyst centerpiece.",
      stock: 3,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: chopardBrand._id,
    },
    {
      name: "Chopard L'Heure Du Diamant Necklace",
      price: 22000,
      material: "18k White Gold, Diamond",
      description:
        "Luxurious necklace featuring a dazzling diamond arrangement.",
      stock: 1,
      category: "Necklace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: chopardBrand._id,
    },
    {
      name: "Chopard Ice Cube Earrings",
      price: 4800,
      material: "18k Yellow Gold",
      description: "Modern earrings with a geometric design.",
      stock: 4,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: chopardBrand._id,
    },
    {
      name: "Chopard Happy Diamonds Watch",
      price: 19000,
      material: "18k Rose Gold, Diamonds",
      description: "Luxury watch with dancing diamonds on the dial.",
      stock: 2,
      category: "Watch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: chopardBrand._id,
    },

    // Bvlgari
    {
      name: "Bvlgari Serpenti Bracelet",
      price: 15000,
      material: "18k Gold, Diamond",
      description:
        "An iconic bracelet inspired by the snake, symbolizing strength.",
      stock: 3,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: bvlgariBrand._id,
    },
    {
      name: "Bvlgari B.Zero1 Ring",
      price: 2800,
      material: "18k Rose Gold",
      description: "Bold ring inspired by the grandeur of Rome's Colosseum.",
      stock: 6,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: bvlgariBrand._id,
    },
    {
      name: "Bvlgari Divas' Dream Necklace",
      price: 12500,
      material: "18k White Gold, Diamond",
      description: "Elegant necklace inspired by Italian feminine beauty.",
      stock: 2,
      category: "Necklace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: bvlgariBrand._id,
    },
    {
      name: "Bvlgari Fiorever Earrings",
      price: 8700,
      material: "18k Gold, Diamond",
      description: "Earrings with floral motifs and sparkling diamonds.",
      stock: 3,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: bvlgariBrand._id,
    },
    {
      name: "Bvlgari Octo Watch",
      price: 21000,
      material: "18k Gold, Steel",
      description:
        "Masterful craftsmanship combined with iconic Italian design.",
      stock: 1,
      category: "Watch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: bvlgariBrand._id,
    },

    // Harry Winston
    {
      name: "Harry Winston Cluster Earrings",
      price: 38000,
      material: "Platinum, Diamond",
      description:
        "Timeless diamond cluster earrings with exceptional brilliance.",
      stock: 2,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: harryWinstonBrand._id,
    },
    {
      name: "Harry Winston Solitaire Ring",
      price: 60000,
      material: "Platinum, Diamond",
      description: "A classic solitaire ring showcasing a flawless diamond.",
      stock: 1,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: harryWinstonBrand._id,
    },
    {
      name: "Harry Winston Secret Watch",
      price: 45000,
      material: "Platinum, Diamond",
      description:
        "An exquisite secret watch hidden beneath a diamond-encrusted design.",
      stock: 2,
      category: "Watch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: harryWinstonBrand._id,
    },
    {
      name: "Harry Winston Emerald Necklace",
      price: 80000,
      material: "Platinum, Emerald, Diamond",
      description:
        "A breathtaking necklace featuring an emerald centerpiece surrounded by diamonds.",
      stock: 1,
      category: "Necklace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: harryWinstonBrand._id,
    },
    {
      name: "Harry Winston Diamond Loop Bracelet",
      price: 120000,
      material: "Platinum, Diamond",
      description:
        "An intricate bracelet with stunning diamond loops creating a glamorous look.",
      stock: 1,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: harryWinstonBrand._id,
    },
    // Van Cleef & Arpels
    {
      name: "Van Cleef & Arpels Alhambra Bracelet",
      price: 9600,
      material: "18k Yellow Gold, Onyx",
      description:
        "A timeless bracelet featuring the iconic Alhambra clover design.",
      stock: 7,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: vancleefBrand._id,
    },
    {
      name: "Van Cleef & Arpels Frivole Ring",
      price: 13000,
      material: "18k Rose Gold, Diamond",
      description:
        "A floral-inspired ring with delicate diamonds and gold petals.",
      stock: 4,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: vancleefBrand._id,
    },
    {
      name: "Van Cleef & Arpels Vintage Alhambra Necklace",
      price: 13500,
      material: "18k White Gold, Mother-of-Pearl",
      description:
        "A stunning necklace with a mother-of-pearl four-leaf clover pendant.",
      stock: 5,
      category: "Necklace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: vancleefBrand._id,
    },
    {
      name: "Van Cleef & Arpels Perlée Earrings",
      price: 9800,
      material: "18k Yellow Gold",
      description:
        "Elegant earrings with fine gold beads surrounding the design.",
      stock: 6,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: vancleefBrand._id,
    },
    {
      name: "Van Cleef & Arpels Snowflake Watch",
      price: 45000,
      material: "Platinum, Diamond",
      description:
        "A luxurious watch inspired by the beauty of snowflakes, featuring diamonds on a platinum band.",
      stock: 1,
      category: "Watch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: vancleefBrand._id,
    },
    //David
    {
      name: "David Yurman Cable Classics Bracelet",
      price: 8500,
      material: "Sterling Silver, 18k Yellow Gold",
      description:
        "A signature bracelet featuring twisted sterling silver cable design with gold accents.",
      stock: 6,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: davidYurmanBrand._id,
    },
    {
      name: "David Yurman Albion Ring",
      price: 6500,
      material: "18k Rose Gold, Morganite",
      description:
        "A striking ring with a cushion-cut morganite framed by pavé diamonds.",
      stock: 4,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: davidYurmanBrand._id,
    },
    {
      name: "David Yurman Renaissance Necklace",
      price: 12000,
      material: "18k Yellow Gold, Gemstones",
      description:
        "A vibrant necklace featuring an array of colorful gemstones.",
      stock: 3,
      category: "Necklace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: davidYurmanBrand._id,
    },
    {
      name: "David Yurman Chatelaine Earrings",
      price: 7400,
      material: "Sterling Silver, Blue Topaz",
      description:
        "Delicate drop earrings featuring round blue topaz set in sterling silver.",
      stock: 5,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: davidYurmanBrand._id,
    },
    {
      name: "David Yurman Thoroughbred Watch",
      price: 18500,
      material: "Stainless Steel, Diamond",
      description:
        "A luxury watch featuring a sleek design with a diamond-encrusted bezel.",
      stock: 2,
      category: "Watch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: davidYurmanBrand._id,
    },

    // Piaget
    {
      name: "Piaget Possession Bracelet",
      price: 8200,
      material: "18k Rose Gold, Diamond",
      description: "A refined bracelet featuring rotating diamond bands.",
      stock: 6,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: piagetBrand._id,
    },
    {
      name: "Piaget Rose Ring",
      price: 9700,
      material: "18k Pink Gold, Diamond",
      description:
        "A delicate ring inspired by the beauty of roses, featuring a diamond centerpiece.",
      stock: 5,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: piagetBrand._id,
    },
    {
      name: "Piaget Sunlight Necklace",
      price: 12500,
      material: "18k White Gold, Diamond",
      description:
        "A radiant necklace capturing the brilliance of sunlight with diamonds.",
      stock: 3,
      category: "Necklace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: piagetBrand._id,
    },
    {
      name: "Piaget Limelight Gala Earrings",
      price: 11000,
      material: "18k White Gold, Diamond",
      description:
        "Exquisite earrings that bring together glamour and timeless elegance.",
      stock: 4,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: piagetBrand._id,
    },
    {
      name: "Piaget Polo Watch",
      price: 14500,
      material: "18k Rose Gold, Steel",
      description:
        "A sporty yet elegant watch combining luxury with a contemporary twist.",
      stock: 2,
      category: "Watch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: piagetBrand._id,
    },
    //Graff
    {
      name: "Graff Butterfly Silhouette Necklace",
      price: 65000,
      material: "Platinum, Diamond",
      description:
        "A delicate necklace featuring Graff’s signature butterfly silhouette adorned with diamonds.",
      stock: 2,
      category: "Necklace",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: graffBrand._id,
    },
    {
      name: "Graff Lesedi La Rona Ring",
      price: 95000,
      material: "Platinum, Diamond",
      description:
        "An extraordinary diamond ring from the Lesedi La Rona collection featuring one of the world's rarest diamonds.",
      stock: 1,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: graffBrand._id,
    },
    {
      name: "Graff Diamond Halo Earrings",
      price: 50000,
      material: "Platinum, Diamond",
      description:
        "Exquisite diamond halo earrings that capture light from every angle.",
      stock: 3,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: graffBrand._id,
    },
    //Graff
    {
      name: "Graff Iconic Timepiece Watch",
      price: 150000,
      material: "Platinum, Diamond",
      description:
        "A luxurious timepiece encrusted with diamonds and a sleek design that defines elegance.",
      stock: 1,
      category: "Watch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: graffBrand._id,
    },
    {
      name: "Graff Emerald and Diamond Bracelet",
      price: 120000,
      material: "Platinum, Emerald, Diamond",
      description:
        "An opulent bracelet featuring a mix of emeralds and diamonds in Graff's signature style.",
      stock: 1,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: graffBrand._id,
    },
    //Mikimoto
    {
      name: "Mikimoto Pearl Stud Earrings",
      price: 5500,
      material: "18k White Gold, Akoya Pearls",
      description: "Timeless pearl stud earrings set in 18k white gold.",
      stock: 6,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: mikimotoBrand._id,
    },
    {
      name: "Mikimoto Diamond & Pearl Ring",
      price: 9500,
      material: "18k Yellow Gold, Diamond, Akoya Pearl",
      description:
        "A sophisticated ring featuring a pearl centerpiece surrounded by diamonds.",
      stock: 4,
      category: "Ring",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: mikimotoBrand._id,
    },
    {
      name: "Mikimoto Pearl Drop Earrings",
      price: 12500,
      material: "18k White Gold, South Sea Pearls",
      description: "Elegant drop earrings featuring lustrous South Sea pearls.",
      stock: 2,
      category: "Earrings",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: mikimotoBrand._id,
    },
    {
      name: "Mikimoto Pearl Blossom Watch",
      price: 35000,
      material: "18k White Gold, Diamond, Pearl",
      description:
        "A luxurious watch adorned with diamonds and pearls for a unique floral design.",
      stock: 1,
      category: "Watch",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: mikimotoBrand._id,
    },
    {
      name: "Mikimoto Pearl and Diamond Bracelet",
      price: 18000,
      material: "18k White Gold, Akoya Pearls, Diamond",
      description:
        "A stunning bracelet featuring a combination of Akoya pearls and diamonds set in 18k white gold.",
      stock: 3,
      category: "Bracelet",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
      brand: mikimotoBrand._id,
    },
  ];

  await Jeweleries.insertMany(jeweleries);
  console.log("Created some jeweleries!");
};
const run = async () => {
  await main();
  db.close();
};

run();
