const express = require('express');
const moviesController = require('./controller/movies');

const PORT = 3000;
const server = express();

server.use('/movies/', moviesController);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});