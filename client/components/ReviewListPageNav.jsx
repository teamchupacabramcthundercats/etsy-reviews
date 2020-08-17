import React from 'react';
import PropTypes from 'prop-types';

const ReviewListPageNav = ({ currentPage, totalPages, handleClick }) => {
  // build page nav bar depending on how many totalpage and current page
  const makePageNav = (current, total) => {
    const result = [];

    const makeShortNav = () => {
      if (currentPage === 0) {
        result.push(<button type="button" disabled className="page-nav-prev" key="prev">Prev</button>);
        result.push(<button type="button" className="page-button current-button" key="first">1</button>);
        result.push(<button type="button" className="page-button" key="last">{totalPages}</button>);
        result.push(<button type="button" className="page-nav-next" key="next">Next</button>);
      } else if (currentPage === 1) {
        result.push(<button type="button" className="page-nav-prev" key="prev">Prev</button>);
        result.push(<button type="button" className="page-button" key="first">1</button>);
        result.push(<button type="button" className="page-button current-button" key="last">{totalPages}</button>);
        result.push(<button type="button" disabled className="page-nav-next" key="next">Next</button>);
      }
    };

    const makeLongNav = () => {
      if (currentPage === 0) {
        result.push(<button type="button" disabled className="page-nav-prev" key="prev">Prev</button>);
        result.push(<button type="button" className="page-button current-button" key="first">1</button>);
        result.push(<button type="button" className="page-button" key="2">2</button>);
        result.push(<div key="separator0">...</div>);
        result.push(<button type="button" className="page-button" key="last">{totalPages}</button>);
        result.push(<button type="button" className="page-nav-next" key="next">Next</button>);
      } else if (currentPage === 1) {
        result.push(<button type="button" className="page-nav-prev" key="prev">Prev</button>);
        result.push(<button type="button" className="page-button" key="first">1</button>);
        result.push(<button type="button" className="page-button current-button" key="2">2</button>);
        result.push(<div key="separator0">...</div>);
        result.push(<button type="button" className="page-button" key="last">{totalPages}</button>);
        result.push(<button type="button" className="page-nav-next" key="next">Next</button>);
      } else if ((currentPage + 1) === totalPages) {
        result.push(<button type="button" className="page-nav-prev" key="prev">Prev</button>);
        result.push(<button type="button" className="page-button" key="first">1</button>);
        result.push(<button type="button" className="page-button" key="2">2</button>);
        result.push(<div key="separator0">...</div>);
        result.push(<button type="button" className="page-button current-button" key="last">{totalPages}</button>);
        result.push(<button type="button" disabled className="page-nav-next" key="next">Next</button>);
      } else { // if current page is not first, second, or last
        result.push(<button type="button" className="page-nav-prev" key="prev">Prev</button>);
        result.push(<button type="button" className="page-button" key="first">1</button>);
        result.push(<div key="separator1">...</div>);
        result.push(<button type="button" className="page-button current-button" key={currentPage + 1}>{currentPage + 1}</button>);
        result.push(<div key="separator2">...</div>);
        result.push(<button type="button" className="page-button" key="last">{totalPages}</button>);
        result.push(<button type="button" className="page-nav-next" key="next">Next</button>);
      }
    };

    // logic for building out nav bar array
    // add prev page button
    // result.push(<button type="button" className="page-nav-prev" key="prev">Prev</button>);

    if (total < 3) { // less than 2 total pages
      makeShortNav();
    } else { // 3 or more total pages
      makeLongNav();
    }

    // add next page button
    // result.push(<button type="button" className="page-nav-next" key="next">Next</button>);

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
