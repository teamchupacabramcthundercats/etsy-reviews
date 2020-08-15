import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoModal from './PhotoModal';
import ReviewHeader from './ReviewHeader';
import ReviewList from './ReviewList';
import ReviewPhotoGallery from './ReviewPhotoGallery';

const App = () => {
  const [review, setReview] = useState([]);
  const [sort, setSort] = useState('recommended');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const getProductReview = async () => {
    const path = (window.location.pathname).slice(9);

    const result = await axios(`/api/product/${path}`);

    return result.data.reviews;
  };

  const sortReviews = (sortMethod, array = review) => {
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

    setReview(sorted);
  };

  useEffect(() => {
    if (review.length === 0) { // fetch data then sort by recommended
      getProductReview()
        .then((data) => {
          sortReviews(sort, data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [review]);

  const handleSortChange = ({ target }) => {
    const { value } = target;

    setSort(value);

    sortReviews(value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePhotoClick = (data) => {
    setModalData(data);
    openModal();
  };

  return (
    <div>
      <PhotoModal data={modalData} show={showModal} onClick={closeModal} />
      <ReviewHeader reviews={review} handleSortChange={handleSortChange} sort={sort} />
      <ReviewList reviews={review} handleClick={handlePhotoClick} />
      <ReviewPhotoGallery reviews={review} handleClick={handlePhotoClick} />
    </div>
  );
};

export default App;
