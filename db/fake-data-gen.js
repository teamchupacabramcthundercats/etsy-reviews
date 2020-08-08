const faker = require('faker');

// create product pic URL for purchased_item_pic
const getRandomProductPic = () => {
  let fileName = faker.random.number({
    // product pics is prefixed with 0, ex. 001.jpg
    min: 0,
    max: 99,
  });

  fileName = fileName.toString().padStart(3, '0');

  return `https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/${fileName}.jpg`;
};

// create pic URL for attached_pic
const getRandomAttachedPic = () => {
  // pick random number between 0 and 4, only add attached pic if result is 4
  // want about a 25% chance for an attached pic to appear
  if (faker.random.number(4) === 4) {
    let fileName = faker.random.number({
      min: 0,
      max: 99,
    });

    fileName = fileName.toString().padStart(3, '0');

    return `https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/${fileName}.jpg`;
  }

  return null;
};

// create people pic URL for profile pic
const getRandomProfilePic = () => {
  const fileName = faker.random.number({
    // people photo is prefix with a 2, ex. 200.jpg
    min: 200,
    max: 249,
  });

  return `https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/${fileName}.jpg`;
};

const createReview = (productName) => (
  // generate one review with random info
  {
    name: faker.name.firstName(),
    rating: faker.random.number({ min: 1, max: 5 }),
    date: faker.date.between('2019-01-01', '2020-08-07'),
    review: faker.lorem.sentence(),
    purchased_item_name: productName,
    purchased_item_pic: getRandomProductPic(),
    attached_pic: getRandomAttachedPic(),
    profile_pic: getRandomProfilePic(),
  }
);

const createReviewsArray = () => {
  // generate 1 - 15 reviews and store in array
  const count = faker.random.number({
    min: 1,
    max: 15,
  });

  const productName = faker.commerce.productName()

  const reviews = new Array(count).fill(null).map(() => createReview(productName));

  return reviews;
};

module.exports = {
  createReviewsArray,
};
