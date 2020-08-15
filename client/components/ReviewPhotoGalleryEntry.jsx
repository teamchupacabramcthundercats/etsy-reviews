/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const ReviewPhotoGalleryEntry = ({ handleClick, review }) => (
  <img src={review.attached_pic} alt="gallery" onClick={() => handleClick(review)} onKeyPress={() => handleClick(review)} />
);

export default ReviewPhotoGalleryEntry;

ReviewPhotoGalleryEntry.propTypes = {
  attached_pic: PropTypes.string,
  handleClick: PropTypes.func,
  review: PropTypes.object,
};
