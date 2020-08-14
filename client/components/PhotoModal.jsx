/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const PhotoModal = ({ data, show }) => {
  const showHideClass = show ? 'modal-container display-block' : 'modal-container display-none';

  return (
    <div className={showHideClass}>
      <button type="button">Exit</button>
      <div className="modal-main">
        <button type="button">Prev</button>
        <button type="button">Next</button>
        <div className="modal-pic">
          <img src={data.attached_pic} alt="attached" />
        </div>
        <div className="modal-info">
          <div className="modal-header">
            <img src={data.profile_pic} alt="profile" />
            <div className="modal-header-namedate">
              <p>{data.date}</p>
              <p>{data.name}</p>
            </div>
          </div>
          <div className="modal-body">
            <span>Stars</span>
            <p>{data.review}</p>
          </div>
          <div className="modal-footer">
            <h5>Purchased Item:</h5>
            <div>
              <img src={data.purchased_item_pic} alt="purchased" />
              <p>{data.purchased_item_name}</p>
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
