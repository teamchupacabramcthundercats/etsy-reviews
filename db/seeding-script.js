const mongoose = require('mongoose');
const fake = require('./fake-data-gen.js');

// db configuration
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

// connect to db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('connection successful!');
});

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
    profile_pic: String,
  }],
});

// create model
const Review = mongoose.model('Review', reviewSchema);

// create 100 products and save to db
const generateProductsToDB = async () => {
  const results = [];

  try {
    for (let i = 0; i < 100; i += 1) {
      // create zero padded product_id
      const id = i.toString().padStart(5, '0');

      const review = new Review({
        product_id: id,
        reviews: fake.createReviewsArray(),
      });

      review.save();

      results.push(review);
    }

    await Promise.all(results);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('DB Seeding Complete...');
    mongoose.disconnect();
  }
};

generateProductsToDB();
