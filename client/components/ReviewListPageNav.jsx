import React from 'react';
import PropTypes from 'prop-types';

const ReviewListPageNav = ({ currentPage, totalPages, handleClick }) => {
  // build page nav bar depending on how many totalpage and current page
  const makePageNav = (current, total) => {
    const result = [];

    const prev = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.7 11.3L6 12l.7.7 4 4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9.8 13H17c.6 0 1-.4 1-1s-.4-1-1-1H9.8l2.3-2.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-4 4z" />
      </svg>
    );

    const next = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z" />
      </svg>
    );

    const makeShortNav = () => {
      if (currentPage === 0 && totalPages === 1) {
        result.push(<button type="button" disabled className="page-button page-nav-prev" key="prev">{prev}</button>);
        result.push(<button type="button" className="page-button current-button" key="first">1</button>);
        result.push(<button type="button" disabled className="page-button page-nav-next" key="next">{next}</button>);
      } else if (currentPage === 0) {
        result.push(<button type="button" disabled className="page-button page-nav-prev" key="prev">{prev}</button>);
        result.push(<button type="button" className="page-button current-button" key="first">1</button>);
        result.push(<button type="button" className="page-button" key="last">{totalPages}</button>);
        result.push(<button type="button" className="page-button page-nav-next" key="next">{next}</button>);
      } else if (currentPage === 1) {
        result.push(<button type="button" className="page-button page-nav-prev" key="prev">{prev}</button>);
        result.push(<button type="button" className="page-button" key="first">1</button>);
        result.push(<button type="button" className="page-button current-button" key="last">{totalPages}</button>);
        result.push(<button type="button" disabled className="page-button page-nav-next" key="next">{next}</button>);
      }
    };

    const makeLongNav = () => {
      if (currentPage === 0) {
        result.push(<button type="button" disabled className="page-button page-nav-prev" key="prev">{prev}</button>);
        result.push(<button type="button" className="page-button current-button" key="first">1</button>);
        result.push(<button type="button" className="page-button" key="2">2</button>);
        result.push(<div key="separator0">...</div>);
        result.push(<button type="button" className="page-button" key="last">{totalPages}</button>);
        result.push(<button type="button" className="page-button page-nav-next" key="next">{next}</button>);
      } else if (currentPage === 1) {
        result.push(<button type="button" className="page-button page-nav-prev" key="prev">{prev}</button>);
        result.push(<button type="button" className="page-button" key="first">1</button>);
        result.push(<button type="button" className="page-button current-button" key="2">2</button>);
        result.push(<div key="separator0">...</div>);
        result.push(<button type="button" className="page-button" key="last">{totalPages}</button>);
        result.push(<button type="button" className="page-button page-nav-next" key="next">{next}</button>);
      } else if ((currentPage + 1) === totalPages) {
        result.push(<button type="button" className="page-button page-nav-prev" key="prev">{prev}</button>);
        result.push(<button type="button" className="page-button" key="first">1</button>);
        result.push(<button type="button" className="page-button" key="2">2</button>);
        result.push(<div key="separator0">...</div>);
        result.push(<button type="button" className="page-button current-button" key="last">{totalPages}</button>);
        result.push(<button type="button" disabled className="page-button page-nav-next" key="next">{next}</button>);
      } else { // if current page is not first, second, or last
        result.push(<button type="button" className="page-button page-nav-prev" key="prev">{prev}</button>);
        result.push(<button type="button" className="page-button" key="first">1</button>);
        result.push(<div key="separator1">...</div>);
        result.push(<button type="button" className="page-button current-button" key={currentPage + 1}>{currentPage + 1}</button>);
        result.push(<div key="separator2">...</div>);
        result.push(<button type="button" className="page-button" key="last">{totalPages}</button>);
        result.push(<button type="button" className="page-button page-nav-next" key="next">{next}</button>);
      }
    };

    if (total < 3) { // less than 2 total pages
      makeShortNav();
    } else { // 3 or more total pages
      makeLongNav();
    }

    return result;

    // if totalpages is less than 3
    // render 1 last page

    // if totalpages is more than 3 and current page is 1 or 2
    // render 1 2 ... lastpage

    // if totalpages is more than 3 and current page is greater than 2
    // render 1 ... current ... lastpage

    // if totalpages is more than 3 and current page is last page
    // render 1 2 ... last page
  };

  return (
    <div className="page-nav" onClick={handleClick} onKeyPress={handleClick} role="button" tabIndex="0">
      { makePageNav(currentPage, totalPages) }
    </div>
  );
};

export default ReviewListPageNav;

ReviewListPageNav.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
