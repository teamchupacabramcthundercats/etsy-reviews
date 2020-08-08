const mongoose = require('mongoose')
const db = require('../db/db.js')

afterAll(async () => {
  await mongoose.disconnect();
})

test('should return an object', async () => {
  const result = await db.getReviewsById('00001');
  expect(result).toBeObject()
})

test('should return object with the correct product_id', async () => {
  const result = await db.getReviewsById('00002');
  const expected = { product_id: '00002' }
  expect(result).toMatchObject(expected)
})

test('should return object with at least one review', async () => {
  const result = await db.getReviewsById('00003');
  expect(result.reviews.length).toBeGreaterThan(0);
})