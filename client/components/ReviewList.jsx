/* eslint-disable no-lonely-if */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';
import ReviewListPageNav from './ReviewListPageNav';

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

  const changeCurrentPage = (nav) => {
    if (typeof nav === 'number') {
      setCurrentPage(nav);
    } else {
      if (nav.includes('prev')) {
        setCurrentPage(currentPage - 1);
      } else if (nav.includes('next')) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const handleNavBarClick = ({ target }) => {
    if (target.tagName === 'BUTTON') {
      if (target.className.includes('page-button')) { // if page number is clicked
        const index = target.innerText - 1;
        changeCurrentPage(index);
      } else { // if prev or next is clicked
        changeCurrentPage(target.className);
      }
    }
  };

  return (
    <div>
      { reviewPages.length === 0 ? 'Loading...' : reviewPages[currentPage].map((review) => (
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
      <ReviewListPageNav
        totalPages={totalPages}
        currentPage={currentPage}
        handleClick={handleNavBarClick}
      />
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
};

export default ReviewList;
