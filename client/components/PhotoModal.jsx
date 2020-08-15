/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Star from '../star.svg';
import NextArrow from '../nextArrow.svg';
import PrevArrow from '../prevArrow.svg';

const PhotoModal = ({ data, show }) => {
  const showHideClass = show ? 'modal-container display-block' : 'modal-container display-none';

  return (
    <div className={showHideClass}>
      <button className="exit-btn" type="button">Exit</button>
      <button className="prev-btn" type="button">
        <span><PrevArrow /></span>
      </button>
      <button className="next-btn" type="button">
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
              <p>{moment(data.date).format('MMMM D, YYYY')}</p>
              <p>{data.name}</p>
            </div>
          </div>
          <div className="modal-body">
            <span>{data.rating === undefined ? 'Loading...' : new Array(data.rating).fill(null).map((current, i) => <Star key={i} />)}</span>
            <p>{data.review}</p>
          </div>
          <div className="modal-footer">
            <h5>Purchased Item:</h5>
            <div>
              <img src={data.purchased_item_pic} alt="purchased" />
              <p>{data.purchased_item_name}</p>
              <p>Sold</p>
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
};

export default PhotoModal;
