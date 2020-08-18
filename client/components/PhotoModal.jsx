/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Star from '../graphics/star.svg';
import NextArrow from '../graphics/nextarrow.svg';
import PrevArrow from '../graphics/prevarrow.svg';
import ExitArrow from '../graphics/exitsymbol.svg';

const PhotoModal = ({
  data,
  show,
  closeModal,
  nextModal,
  prevModal,
}) => {
  const showHideClass = show ? 'modal-container display-block' : 'modal-container display-none';

  return (
    <div className={showHideClass} onClick={closeModal} onKeyPress={closeModal} role="button" tabIndex="0">
      <button className="r-modal-exit-btn r-btn" type="button" onClick={closeModal}>
        <span><ExitArrow /></span>
      </button>
      <button className="r-modal-prev-btn r-btn" type="button" onClick={prevModal}>
        <span><PrevArrow /></span>
      </button>
      <button className="r-modal-next-btn r-btn" type="button" onClick={nextModal}>
        <span><NextArrow /></span>
      </button>
      <div className="modal-main">
        <div className="modal-pic">
          <img src={data.attached_pic} alt="attached" />
        </div>
        <div className="modal-info">
          <div className="modal-header">
            <img src={data.profile_pic} alt="profile" />
            <div className="modal-header-namedate">
              <p className="r-modal-header-date">{moment(data.date).format('MMM D, YYYY')}</p>
              <p className="r-modal-header-name">{data.name}</p>
            </div>
          </div>
          <div className="modal-body">
            <span>{data.rating === undefined ? 'Loading...' : new Array(data.rating).fill(null).map((current, i) => <Star key={i} />)}</span>
            <p>{data.review}</p>
          </div>
          <div className="modal-footer">
            <h5>Purchased Item:</h5>
            <div className="r-modal-footer-section">
              <img src={data.purchased_item_pic} alt="purchased" />
              <div className="modal-footer-info">
                <p>{data.purchased_item_name}</p>
                <p>Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoModal.propTypes = {
  data: PropTypes.object,
  show: PropTypes.bool,
  nextModal: PropTypes.func,
  prevModal: PropTypes.func,
  closeModal: PropTypes.func,
};

export default PhotoModal;
