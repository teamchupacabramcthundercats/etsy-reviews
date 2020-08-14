/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';

const ReviewList = ({ reviews, handleClick }) => (
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

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
};

export default ReviewList;
