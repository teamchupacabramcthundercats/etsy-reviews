const mongoose = require('mongoose');
const fake = require('./fake-data-gen.js')

// db configuration
mongoose.connect('mongodb://localhost/reviews', {useNewUrlParser: true, useUnifiedTopology: true});

// connect to db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))
// db.once('open', () => {
//   console.log('connection successful!');
// })

// set schema
const reviewSchema = new mongoose.Schema({
  product_id: String,
  reviews: [{
    name: String,
    rating: Number,
    date: Date,
    review: String,
    purchased_item_name: String,
    purchased_item_pic: String,
    attached_pic: String,
    profile_pic: String
  }]
})

// create model
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  getReviewsById: (id) => {
    return Review.findOne({ "product_id": `${id}` })
  },
  model: Review,
}