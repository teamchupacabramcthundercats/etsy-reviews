/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Star from '../star.svg';

const ReviewListEntry = ({
  profilePic,
  name,
  date,
  rating,
  review,
  attachedPic,
  purchasedItemName,
  purchasedItemPic,
  reviewData,
  handleClick,
}) => (
  <div className="review-list-entry">
    <div className="review-header">
      <img className="review-profile-pic" src={profilePic} alt="profile" />
      <button className="review-links" type="button">{name}</button>
      <div>{moment(date).format('MMMM D, YYYY')}</div>
    </div>
    <div className="review-body">
      <div className="review-body-inner">
        <div>{rating === undefined ? 'Loading...' : new Array(rating).fill(null).map((current, i) => <Star key={i} />)}</div>
        <div>{review}</div>
      </div>
      { attachedPic ? <img className="review-attached-pic" src={attachedPic} alt="attached" onClick={() => handleClick(reviewData)} /> : <div className="review-attached-pic" />}
    </div>
    <div className="review-footer">
      <p>Purchased Item:</p>
      <div className="review-inner-footer">
        <img className="review-purch-pic" src={purchasedItemPic} alt="purchased item" />
        <button className="review-links" type="button">{purchasedItemName}</button>
      </div>
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
  reviewData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ReviewListEntry;
