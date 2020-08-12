const express = require('express');
const morgan = require('morgan');
const db = require('../db/db.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/product/:productId', express.static('public'));

app.get('/api/product/:productId', (req, res) => {
  const { productId } = req.params;

  db.getReviewsById(productId)
    .then((response) => {
      if (response === null) {
        res.sendStatus(404); // if no record found, return 404
      } else {
        res.status(200).send(response);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = app;
