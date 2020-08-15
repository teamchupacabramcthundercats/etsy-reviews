/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

const ReviewPhotoGallery = ({ reviews }) => {
  const filterAttached = reviews.filter((review) => (
    review.attached_pic !== null
  ));

  return (
    <div className="review-gallery">
      <div className="review-gallery-title">
        <h4>Photos from reviews</h4>
      </div>
      <div className="review-gallery-photos">
        {filterAttached.map((review) => <img src={review.attached_pic} alt="gallery" key={review._id} />)}
      </div>
    </div>
  );
};

export default ReviewPhotoGallery;

ReviewPhotoGallery.propTypes = {
  reviews: PropTypes.array.isRequired,
};
