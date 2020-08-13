import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewHeader from './ReviewHeader';
import ReviewList from './ReviewList';

const App = () => {
  const [review, setReview] = useState([]);
  const [sort, setSort] = useState('recommended');

  const getProductReview = async () => {
    const path = (window.location.pathname).slice(9);

    const result = await axios(`/api/product/${path}`);

    setReview(result.data.reviews);
  };

  const sortReviews = (sortMethod) => {
    let sorted;

    if (sortMethod === 'newest') { // sort by date descending
      sorted = review.sort((a, b) => (
        new Date(b.date) - new Date(a.date)
      ));
    } else {
      sorted = review.sort((a, b) => ( // sort by rating descending if sorthMethod is 'recommended'
        b.rating - a.rating
      ));
    }

    setReview(sorted);
  };

  useEffect(() => {
    if (review.length === 0) {
      getProductReview();
    }
  }, []);

  const handleSortChange = ({ target }) => {
    const { value } = target;

    setSort(value);

    sortReviews(value);
  };

  return (
    <div>
      <ReviewHeader reviews={review} handleSortChange={handleSortChange} sort={sort} />
      <ReviewList reviews={review} />
    </div>
  );
};

export default App;
