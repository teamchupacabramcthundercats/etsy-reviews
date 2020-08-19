/* eslint-disable arrow-body-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewPhotoGalleryEntry from './ReviewPhotoGalleryEntry';

const ReviewPhotoGallery = ({ attachedReviews, handleClick }) => {
  const [reviewPages, setReviewPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showHideNext, setShowHideNext] = useState(false);
  const [showHidePrev, setShowHidePrev] = useState(false);

  const splitReviews = () => {
    const results = [];
    const array = [...attachedReviews];

    while (array.length > 0) {
      results.push(array.splice(0, 4));
    }

    return results;
  };

  const handleChangePage = ({ target }) => {
    if (target.className.includes('prev')) {
      setCurrentPage(currentPage - 1);
    } else if (target.className.includes('next')) {
      setCurrentPage(currentPage + 1);
    }
  };

  const togglePrevNextDisplay = () => {
    if (reviewPages.length === 0 || reviewPages.length === 1) {
      setShowHidePrev(false);
      setShowHideNext(false);
    } else {
      // hide prev button if on first page or there's only one page of photos
      if (currentPage === 0 && reviewPages.length > 1) {
        setShowHidePrev(false);
      } else {
        setShowHidePrev(true);
      }

      // hide next button if on last page or there's only one page of photos
      if (currentPage === reviewPages.length - 1 && reviewPages.length > 1) {
        setShowHideNext(false);
      } else {
        setShowHideNext(true);
      }
    }
  };

  const prev = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z" />
    </svg>
  );

  const next = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z" />
    </svg>
  );

  useEffect(() => {
    setReviewPages(splitReviews());
  }, [attachedReviews]);

  useEffect(() => {
    togglePrevNextDisplay();
  }, [currentPage, reviewPages]);

  return (
    <div className="review-gallery">
      <button type="button" className={showHidePrev === true ? 'gallery-prev r-btn display-block' : 'gallery-prev r-btn display-none'} onClick={handleChangePage}>{prev}</button>
      <button type="button" className={showHideNext === true ? 'gallery-next r-btn display-block' : 'gallery-next r-btn display-none'} onClick={handleChangePage}>{next}</button>
      <div className="review-gallery-title">
        <h4>Photos from reviews</h4>
      </div>
      <div className="review-gallery-photos">
        {reviewPages.length === 0 ? <div /> : reviewPages[currentPage].map((review) => (
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
