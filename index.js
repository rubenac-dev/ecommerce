const express = require('express');
const moviesRoutes = require('./routes/movies.routes');
const productRoutes = require('./routes/products.routes');

const PORT = 3000;
const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/movies/', moviesRoutes);
server.use('/products/', productRoutes);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});