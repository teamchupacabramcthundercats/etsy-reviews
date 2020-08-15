/* eslint-disable arrow-body-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import ReviewPhotoGalleryEntry from './ReviewPhotoGalleryEntry';

const ReviewPhotoGallery = ({ attachedReviews, handleClick }) => {
  return (
    <div className="review-gallery">
      <div className="review-gallery-title">
        <h4>Photos from reviews</h4>
      </div>
      <div className="review-gallery-photos">
        {attachedReviews.map((review) => (
          <ReviewPhotoGalleryEntry review={review} key={review._id} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPhotoGallery;

ReviewPhotoGallery.propTypes = {
  attachedReviews: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
