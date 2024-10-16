const db = require("../db");
const Brand = require("../models/brand");
const Jewelery = require("../models/jewelery");

const run = async () => {
  const brands = [
    {
      name: "Tiffany & Co.",
      origin: "USA",
      description:
        "Luxury jewelry brand known for its engagement rings and timeless designs.",
      yearCreated: 1837,
    },
    {
      name: "Cartier",
      origin: "France",
      description:
        "French luxury goods company renowned for its jewelry and watches.",
      yearCreated: 1847,
    },
    {
      name: "Chopard",
      origin: "Switzerland",
      description:
        "Swiss brand famous for high-end timepieces and precious gemstone jewelry.",
      yearCreated: 1860,
    },
    {
      name: "Bvlgari",
      origin: "Italy",
      description:
        "Italian brand celebrated for its bold designs and use of vibrant gemstones.",
      yearCreated: 1884,
    },
    {
      name: "Harry Winston",
      origin: "USA",
      description:
        "American jeweler known for rare diamonds and exquisite haute joaillerie.",
      yearCreated: 1932,
    },
    {
      name: "Van Cleef & Arpels",
      origin: "France",
      description:
        "French luxury brand famous for intricate jewelry and enchanting creations.",
      yearCreated: 1906,
    },
    {
      name: "David Yurman",
      origin: "USA",
      description:
        "American brand known for its signature cable motif and modern designs.",
      yearCreated: 1980,
    },
    {
      name: "Piaget",
      origin: "Switzerland",
      description:
        "Swiss brand specializing in luxury watches and elegant diamond jewelry.",
      yearCreated: 1874,
    },
    {
      name: "Graff",
      origin: "UK",
      description:
        "British jeweler famed for rare diamonds and luxury designs.",
      yearCreated: 1960,
    },
    {
      name: "Mikimoto",
      origin: "Japan",
      description:
        "Japanese jeweler renowned for creating the world's finest cultured pearls.",
      yearCreated: 1893,
    },
  ];

  try {
    //delete jeweleries

    await Jewelery.deleteMany({});
    console.log("deleted jewelery seed");
    await Brand.deleteMany({});
    console.log("deleted brand seed");
    //delete brands
    //add brands
    let newBrand = await Brand.insertMany(brands);
    console.log("added new jewelery seed");
    //add jeweleries

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
          "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-solestesapphire-and-diamond-ring-31405815_1044706_SV_1.jpg?&op_usm=1.75,1.0,6.0&defaultImage=NoImageAvailableInternal&",
        brand: tiffanyBrand._id,
      },
      {
        name: "Tiffany T Wire Bracelet",
        price: 1500,
        material: "18k Gold",
        description:
          "Minimalist bracelet featuring the iconic Tiffany T design.",
        stock: 10,
        category: "Bracelet",
        image:
          "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-tdiamond-wire-bracelet-33263538_998109_SV_2_M.jpg?&op_usm=2.0,1.0,6.0&defaultImage=NoImageAvailableInternal&://upload.wikimedia.org/wikipedia/commons/d/d4/One_Ring_Blender_Render.png",
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
          "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-victoriaearrings-32948278_1016115_SV_1.jpg?&op_usm=2.0,1.0,6.0&defaultImage=NoImageAvailableInternal&",
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
          "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-infinitypendant-30319591_1012750_SV_1.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&",
        brand: tiffanyBrand._id,
      },
      {
        name: "Tiffany Key Charm",
        price: 950,
        material: "18k Gold",
        description:
          "Intricate key charm symbolizing knowledge and inspiration.",
        stock: 12,
        category: "Charm",
        image:
          "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-keysfleur-de-lis-key-pendant-25508327_1013513_SV_1_G_M.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&",
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
          "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc829e271/images/large/05a9faecaca2528b8ac6dfadad2da07e.png?sw=750&sh=750&sm=fit&sfrm=png",
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
          "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf992dc53/images/large/c263db7f2f4f57b0a2d5fe60e99bb7c9.png?sw=750&sh=750&sm=fit&sfrm=png",
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
          "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw35e43f90/images/large/d5a132b330e855f29632cebeffb86e68.png?sw=750&sh=750&sm=fit&sfrm=png",
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
          "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw60f6c917/images/large/d288595f046554599461b5322f0c05e9.png?sw=750&sh=750&sm=fit&sfrm=png",
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
          "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwd8bb2240/images/large/0ce39fa5e43d5199a7a7ebe612e2fa4f.png?sw=750&sh=750&sm=fit&sfrm=png",
        brand: cartierBrand._id,
      },

      // Chopard
      {
        name: "Chopard Happy Hearts Bracelet",
        price: 3600,
        material: "18k Rose Gold",
        description:
          "Delicate bracelet with heart-shaped elements and diamonds.",
        stock: 10,
        category: "Bracelet",
        image:
          "https://atamianwatches.com/cdn/shop/products/85A074-5202_a79a6359-b568-4290-a0c2-203599676fbf_2400x.jpg?v=1677485469",
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
          "https://www.sheron.sk/wp-content/uploads/2020/03/0D4A9932.jpg",
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
          "https://images.prestigeonline.com/wp-content/uploads/sites/5/2021/04/27221154/79A066-1001_LHeure-du-Diamant_Christmas-2020_%C2%A9Regis-Golay-768x1024.jpg",
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
          "https://www.jb-jewelers.com/wp-content/uploads/jbpictures/837702-5003_mod-1024x1024.jpg",
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
          "https://www.sheron.sk/wp-content/uploads/2020/03/0D4A5994.jpg",
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
          "https://media.bulgari.com/image/upload/c_fill,h_1024,w_1024/q_auto/f_auto/1361838.png",
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
          "https://media.bulgari.com/image/upload/c_fill,h_1024,w_1024/q_auto/f_auto/1427646.png",
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
          "https://www.kessaris.gr/sites/default/files/styles/product_zoom/public/cl858648_201_wrn_1.png?itok=-yD9knTz",
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
          "https://i.pinimg.com/736x/23/bd/05/23bd058b78b496ec2265716d9a8e1286.jpg",
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
          "https://media.bulgari.com/image/upload/c_fill,h_1024,w_1024/q_auto/f_auto/1463734.png",
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
          "https://i.pinimg.com/736x/20/3a/9a/203a9a258896039816cb70c42dc80dd0--diamond-jewelry-diamond-earrings.jpg",
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
          "https://www.harrywinston.com/-/media/project/harry-winston/corporate/harry-winston-int/fine-jewelry/others-by-harry-winston/the-one-round-brilliant-diamond-micropave-engagement-ring/the_one_engagement_ring_diamond_rgdprd010mic_n_4.png?rev=09cec7813e99422c86607d8ba88230dd",
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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdb-gAInZIgIVTZShD5SVTjbgjhrUXpFdpRg&s",
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
          "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/02f3b3e8-f67c-41ef-a5dd-536cc7c634bb.jpeg",
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
          "https://us.tamaracomolli.com/cdn/shop/files/ngyg9iunag6a10y7fnjs1k825qit_2048x.jpg?v=1704192904",
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
          "https://www.vancleefarpels.com/content/dam/rcq/vca/x_/Ao/0F/SJ/R9/ug/Zn/cW/VE/yT/0g/x_Ao0FSJR9ugZncWVEyT0g.jpeg",
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
          "https://www.vancleefarpels.com/content/dam/rcq/vca/21/21/46/5/2121465.jpeg",
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
          "https://www.vancleefarpels.com/content/dam/rcq/vca/20/54/56/0/2054560.jpeg",
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
          "https://www.vancleefarpels.com/content/dam/rcq/vca/23/68/78/3/2368783.jpeg.transform.vca-w820-1x.jpeg",
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
          "https://www.vancleefarpels.com/content/dam/rcq/vca/21/28/06/9/2128069.jpeg",
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
          "https://s7d9.scene7.com/is/image/HoltRenfrewMarketplace/8f339591a53442fd8707411a6f151470?$Thumbnail$",
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
          "https://s7d9.scene7.com/is/image/HoltRenfrewMarketplace/8ab812a325384a9d902b6f5445fbd6fb",
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
          "https://cdna.lystit.com/photos/net-a-porter/e6b935b1/david-yurman-Gold-Modern-Renaissance-18-karat-Gold-Diamond-Necklace.jpeg",
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
          "https://media.davidyurman.com/productsv2/E12834D/E12834DSS/E12834DSSABODI-onmodel1.jpg",
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
          "hhttps://m.media-amazon.com/images/I/617xGCTjEtL._AC_UY580_.jpg",
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
          "https://www.net-a-porter.com/variants/images/1647597282643210/e1/w2000_a3-4_q60.jpg",
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
          "https://product-manager.maier.fr/media/products/65bac0c0-914e-4b23-af1c-c6a8cac1e48b/fccf893c-7ca5-4f61-a257-cb771c7bfb0e/bague-piaget-rose_g34uw200-162351",
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
          "https://img.piaget.com/product-slideshow-4/552ad6fa91542f8087e89ac5f275c151b3598de9.jpg",
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
          "https://i0.wp.com/watchilove.com/wp-content/uploads/2022/10/b3cef37b-piaget_sunlight_porte_g34r1300g38ra200-e1665729139385.jpg?fit=1536%2C1920&ssl=1",
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
          "https://hautetime.s3.us-west-1.amazonaws.com/wp-content/uploads/2023/08/27011050/p1.jpg",
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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRE3bVkHl9wpic-F1gS0qCgNjHix9tD1qucQ&s",
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
          "https://i.pinimg.com/originals/8c/ff/d4/8cffd4eab5ca28796c137303c401742a.jpg",
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
          "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw301a639b/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGE716ALL_RGE789_GE23332_1_00_model_4.jpg?sw=800&sh=800",
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
          "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw231f23fa/images/PLP%20HEADERS/watches_14_11_desktop.jpg",
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
          "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw9f3bb5a9/images/celebrating-the-emerald-cut/a-lay-wearing-a-graff-emerald-cut-ring-and-bracelet-2000x2000.jpg",
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
          "https://www.maisonbirks.com/on/demandware.static/-/Sites-master-birks/default/dwf0b1e53f/images/brands/Bijoux%20Birks/Birks%20Pearls/Earrings/Birks%20Pearls%20Freswater%20Baroque%20Pearl%20Earrings.jpg",
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
        description:
          "Elegant drop earrings featuring lustrous South Sea pearls.",
        stock: 2,
        category: "Earrings",
        image:
          "https://www.maisonbirks.com/dw/image/v2/BJBZ_PRD/on/demandware.static/-/Sites-master-birks/default/dw13ed32c4/images/product-images/b/i/birks-splash-pearl-drop-earrings-450010790024-model.jpg?sw=544",
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
          "https://www.lolaroseglobal.com/cdn/shop/products/2501-2_298x350_crop_center.jpg?v=1667221311",
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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUN10iT3hfY3JALikmWaxodb-cNds6-NMang&s",
        brand: mikimotoBrand._id,
      },
    ];

    let newJewelery = await Jewelery.insertMany(jeweleries);
    console.log("added new brand seed");

  } catch (err) {
    console.log('Error found', err)
  }
};

run();
