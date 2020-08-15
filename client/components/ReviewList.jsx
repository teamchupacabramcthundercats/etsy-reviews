/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';

const ReviewList = ({ reviews, handleClick }) => {
  const [reviewPages, setReviewPages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const splitReviews = () => {
    const results = [];
    const array = [...reviews];

    while (array.length > 0) {
      results.push(array.splice(0, 4));
    }

    return results;
  };

  useEffect(() => {
    // split reviews array into arrays of 4;
    setReviewPages(splitReviews());

    // set the total number of pages
    setTotalPages(Math.ceil(reviews.length / 4));
  }, [reviews]);

  // component for number of pages
    // one click handler to handle prev, next, and page select based on className
    // on click, make window jump to top of review list

  return (
    <div>
      {reviews.map((review) => (
        <ReviewListEntry
          handleClick={handleClick}
          key={review._id}
          name={review.name}
          rating={review.rating}
          date={review.date}
          review={review.review}
          attachedPic={review.attached_pic}
          profilePic={review.profile_pic}
          purchasedItemName={review.purchased_item_name}
          purchasedItemPic={review.purchased_item_pic}
          reviewData={review}
        />
      ))}
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
};

export default ReviewList;
