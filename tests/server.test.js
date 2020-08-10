const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/index.js');

afterAll(async () => {
  await mongoose.disconnect();
});

it('endpoint responds with correct object', (done) => (
  request(app)
    .get('/api/product/00001')
    .expect((response) => {
      response.body.product_id = '00001';
    })
    .expect(200, done)
));

it('endpoint responds with status code 404 with wrong id', async (done) => {
  const response = await request(app).get('/api/product/12345');

  expect(response.status).toBe(404);
  done();
});
