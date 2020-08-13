import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewHeader from './ReviewHeader';
import ReviewList from './ReviewList';

const App = () => {
  const [review, setReview] = useState([]);
  const [sort, setSort] = useState('recommended');

  useEffect(() => {
    const getProductReview = async () => {
      const path = (window.location.pathname).slice(9);

      const result = await axios(`/api/product/${path}`);
      setReview(result.data.reviews);
    };

    getProductReview();
  }, []);

  // const sortReviews = () => {

  // };

  const handleSortChange = ({ target }) => {
    const { value } = target;

    setSort(value);
  };

  return (
    <div>
      <ReviewHeader reviews={review} handleSortChange={handleSortChange} sort={sort} />
      <ReviewList reviews={review} />
    </div>
  );
};

export default App;
