/* eslint-disable no-lonely-if */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
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

  if (reviews.length > 4 && totalPages === 0) {
    // split reviews array into arrays of 4;
    setReviewPages(splitReviews());

    // set the total number of pages
    setTotalPages(Math.ceil(reviews.length / 4));
  } else if (reviews.length >= 1 && totalPages === 0) {
    // load single page there's less than 4 reviews
    setReviewPages([reviews]);
    setTotalPages(1);
  }

  const changeCurrentPage = (nav) => {
    // const header = document.getElementById('focus');
    // header.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'start',
    // });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

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
      if (target.className.includes('page-nav')) { // if page number is clicked
        changeCurrentPage(target.className);
      } else { // if prev or next is clicked
        const index = target.innerText - 1;
        changeCurrentPage(index);
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
