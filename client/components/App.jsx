import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';

const App = () => {
  const [review, setReview] = useState({ reviews: [] });

  useEffect(() => {
    const getProductReview = async () => {
      const result = await axios('/api/product/00002');
      setReview(result.data);
    };

    getProductReview();
  }, []);

  return (
    <div>
      <ReviewList reviews={review} />
    </div>
  );
};

export default App;
