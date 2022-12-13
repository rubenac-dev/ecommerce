const mongoose = require('mongoose');
const Product = require('../models/Product');

const products = [
  {
    name: 'Balon mundial 2022',
    description: 'Balon oficial del mundial 2022 de Qatar de la marca Adidas',
    price: 99.99,
    category: 'Futbol',
  },
  {
    name: "Smart TV 50' Samsung",
    description: 'Televisor 4k Samsung con Smart TV y pantalla OLED',
    price: 700,
    category: 'Televisores',
  },
  {
    name: "Smartphone Xiaomi Redmi Note 11",
    description: "Smartphone Xiaomi con procesador Qualcom con 6.4 pulgadas",
    price: 249.99,
    category: 'Telefonia',
  },
  {
    name: "Apple Macbook Pro 14'",
    description: 'Ordenador portatil Mac de 14 pulgadas y pantalla retina',
    price: 1200,
    category: 'Ordenadores',
  },
  {
    name: "Smart TV 45' Xiaomi",
    description: 'Televisor Full HD Xiaomi con Smart TV y pantalla IPS',
    price: 300,
    category: 'Televisores',
  },
  {
    name: "Google Chromecast 4k",
    description: 'Convierte tu televisor en un smart TV mediante el dispositivo Chromecast',
    price: 49.99,
    category: 'Televisores',
  },
  {
    name: "Camiseta Argentina Qatar 2022",
    description: 'Camiseta de la seleccion Argentina del mundial de Qatar 2022',
    price: 99.99,
    category: 'Futbol',
  }
 
];

const productDocuments = products.map(product => new Product(product));
mongoose
  .connect('mongodb://127.0.0.1:27017/proyect', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allProducts = await Product.find();
    if (allProducts.length) {
      await Product.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Product.insertMany(productDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());