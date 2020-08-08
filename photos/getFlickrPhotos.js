const fs = require('fs');
const axios = require('axios');
const Flickr = require('flickr-sdk');
const api = require('../api_keys.js')

// create flickr class
const flickr = new Flickr(api.FLICKR_API_KEY);

// set up search params
flickr.photos.search({
  tags: 'people',
  sort: 'relevance',
  page: '1',
  per_page: '50'
})
  .then((response) => {
    const results = response.body; // pull photos object from response body.

    return results.photos.photo.map(photo => { // loop through photo array and convert XML info into URL
      return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
    })
  })
  .then(results => {
    let count = 0;
    let timer = 1000;

    results.forEach((url) => {
      setTimeout(() => { // setTimeout to stagger requests by 2 seconds
        axios({
          method: 'get',
          url: url,
          responseType: 'stream'
        })
        .then(response => {
          const fileName = count.toString().padStart(3, '0');

          response.data.pipe(fs.createWriteStream(`${fileName}.jpg`))

          count += 1;
        })
      }, timer)

      timer += 2000;
    })
  })
  .catch(error => {
    console.log(error);
  })