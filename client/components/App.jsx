import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoModal from './PhotoModal';
import ReviewHeader from './ReviewHeader';
import ReviewList from './ReviewList';
import ReviewPhotoGallery from './ReviewPhotoGallery';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('recommended');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [attachedPicReviews, setAttachedPicReviews] = useState([]);

  const getProductReview = async () => {
    const path = (window.location.pathname).slice(9);

    const result = await axios(`/api/product/${path}`);

    return result.data.reviews;
  };

  const sortReviews = (sortMethod, array = reviews) => {
    let sorted;

    if (sortMethod === 'newest') { // sort by date descending
      sorted = array.sort((a, b) => (
        new Date(b.date) - new Date(a.date)
      ));
    } else {
      sorted = array.sort((a, b) => ( // sort by rating descending if sorthMethod is 'recommended'
        b.rating - a.rating
      ));
    }

    setReviews(sorted);
  };

  // put reviews with attached pics into separate array for use with modal/gallery
  const getAttachedPicReviews = (array) => {
    const filterAttached = array.filter((review) => (
      review.attached_pic !== null
    ));

    setAttachedPicReviews(filterAttached);
  };

  useEffect(() => {
    if (reviews.length === 0) { // fetch data
      getProductReview()
        .then((data) => {
          sortReviews(sort, data); // sort by recommended
          getAttachedPicReviews(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [reviews]);

  const handleSortChange = ({ target }) => {
    const { value } = target;

    setSort(value);

    sortReviews(value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  // only close modal if user clicks outside of modal-main or exit button
  const closeModal = ({ target }) => {
    const { className } = target;

    // check that user clicked on a target that return a string for classname
    // and it includes modal-container or exit-btn
    if (typeof className === 'string') {
      if (className.includes('modal-container') || className.includes('exit-btn')) {
        setShowModal(false);
      }
    }
  };

  const modalNextPic = () => {
    // check which index currently at in attachedPicReviews
    let index = attachedPicReviews.indexOf(modalData);

    // increment index
    index += 1;
    if (index === attachedPicReviews.length) {
      index = 0;
    }

    // set modalData to new index of attachedPicReviews
    setModalData(attachedPicReviews[index]);
  };

  const modalPrevPic = () => {
    let index = attachedPicReviews.indexOf(modalData);

    index -= 1;
    if (index < 0) {
      index = attachedPicReviews.length - 1;
    }

    setModalData(attachedPicReviews[index]);
  };

  // open modal when photo is clicked and pass in review info tied to that photo
  const handlePhotoClick = (data) => {
    setModalData(data);
    openModal();
  };

  return (
    <div>
      <PhotoModal
        data={modalData}
        show={showModal}
        closeModal={closeModal}
        nextModal={modalNextPic}
        prevModal={modalPrevPic}
      />
      <ReviewHeader reviews={reviews} handleSortChange={handleSortChange} sort={sort} />
      <ReviewList reviews={reviews} handleClick={handlePhotoClick} />
      <ReviewPhotoGallery attachedReviews={attachedPicReviews} handleClick={handlePhotoClick} />
    </div>
  );
};

export default App;
