import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';

const App = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getProductReview = async () => {
      const path = (window.location.pathname).slice(9);

      const result = await axios(`/api/product/${path}`);
      setReview(result.data.reviews);
    };

    getProductReview();
  }, []);

  return (
    <div>
      {/* { review === undefined ? 'Loading...' : <ReviewList reviews={review} /> } */}
      <ReviewList reviews={review} />
    </div>
  );
};

export default App;
