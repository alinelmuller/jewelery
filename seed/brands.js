const db = require('../db')
const Brand = require('../models/brand')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const brands = [
        {
            name: "Tiffany & Co.",
            origin: "USA",
            description: "Luxury jewelry brand known for its engagement rings and timeless designs.",
            yearCreated: 1837,
           
          },
          {
            name: "Cartier",
            origin: "France",
            description: "French luxury goods company renowned for its jewelry and watches.",
            yearCreated: 1847,
           
          },
          {
            name: "Chopard",
            origin: "Switzerland",
            description: "Swiss brand famous for high-end timepieces and precious gemstone jewelry.",
            yearCreated: 1860,
         
          },
          {
            name: "Bvlgari",
            origin: "Italy",
            description: "Italian brand celebrated for its bold designs and use of vibrant gemstones.",
            yearCreated: 1884,
        
          },
          {
            name: "Harry Winston",
            origin: "USA",
            description: "American jeweler known for rare diamonds and exquisite haute joaillerie.",
            yearCreated: 1932,
           
          },
          {
            name: "Van Cleef & Arpels",
            origin: "France",
            description: "French luxury brand famous for intricate jewelry and enchanting creations.",
            yearCreated: 1906,
           
          },
          {
            name: "David Yurman",
            origin: "USA",
            description: "American brand known for its signature cable motif and modern designs.",
            yearCreated: 1980,
            
          },
          {
            name: "Piaget",
            origin: "Switzerland",
            description: "Swiss brand specializing in luxury watches and elegant diamond jewelry.",
            yearCreated: 1874,
    
          },
          {
            name: "Graff",
            origin: "UK",
            description: "British jeweler famed for rare diamonds and luxury designs.",
            yearCreated: 1960,
          
          },
          {
            name: "Mikimoto",
            origin: "Japan",
            description: "Japanese jeweler renowned for creating the world's finest cultured pearls.",
            yearCreated: 1893,
        
          }
         ] 

    await Brand.insertMany(brands)
    console.log("Created some brands!")
}
const run = async () => {
    await main()
    db.close()
}

run()