const express = require('express');
const morgan = require('morgan');
const db = require('../db/db.js');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/api/product/:productId', (req, res) => {
  const { productId } = req.params;

  db.getReviewsById(productId)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = app;
