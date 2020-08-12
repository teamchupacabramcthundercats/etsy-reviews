/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const ReviewListEntry = ({
  profilePic,
  name,
  date,
  rating,
  review,
  attachedPic,
  purchasedItemName,
  purchasedItemPic,
}) => (
  <div className="review-list-entry">
    <div className="review-header">
      <img src={profilePic} alt="profile" />
      <div>{name}</div>
      <div>{date}</div>
    </div>
    <div className="review-body">
      <div>{rating}</div>
      <div>{review}</div>
      <div>{attachedPic}</div>
    </div>
    <div className="review-footer">
      <p>Purchased Item:</p>
      <img src={purchasedItemPic} alt="purchased item" />
      <div>{purchasedItemName}</div>
    </div>
  </div>
);

ReviewListEntry.propTypes = {
  profilePic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  attachedPic: PropTypes.string,
  purchasedItemName: PropTypes.string.isRequired,
  purchasedItemPic: PropTypes.string.isRequired,
};

export default ReviewListEntry;
