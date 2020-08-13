/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';

const ReviewList = ({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <ReviewListEntry
        key={review._id}
        name={review.name}
        rating={review.rating}
        date={review.date}
        review={review.review}
        attachedPic={review.attached_pic}
        profilePic={review.profile_pic}
        purchasedItemName={review.purchased_item_name}
        purchasedItemPic={review.purchased_item_pic}
      />
    ))}
  </div>
);

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
