/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Star from '../graphics/star.svg';

const ReviewHeader = ({ reviews, sort, handleSortChange }) => {
  const avgRating = () => { // calculate store's average rating based on ratings in current reviews
    let avg = reviews.reduce((acc, current) => (
      acc + current.rating
    ), 0);

    avg = Math.floor(avg / reviews.length);

    return avg;
  };

  return (
    <div className="review-list-header">
      <h5>Etsy shop reviews</h5>
      <span>
        {reviews.length === 0 ? 'Loading...' : new Array(avgRating()).fill(null).map((current, i) => (
          <Star key={i} /> // display # of star based on average rating
        ))}
      </span>
      <select name="sort" value={sort} onChange={handleSortChange}>
        <option value="recommended">Sort by: Recommended</option>
        <option value="newest">Sort by: Newest</option>
      </select>
    </div>
  );
};

export default ReviewHeader;

ReviewHeader.propTypes = {
  reviews: PropTypes.array,
  sort: PropTypes.string,
  handleSortChange: PropTypes.func,
};
