import React, { PropTypes} from 'react';

const GridPager = ({ currentPage, totalPages, onChange, toLastPage }) => {
    let li = [];
    let islastPageToShow = totalPages >= 3 ? true : false;
  if(!islastPageToShow) totalPages++; 
  for (let i = 1; i < totalPages; i++) {      li.push(<li key={i} className={currentPage === i? 'active' : ''}><a href="#" onClick={onChange}>{i}</a></li>);  }
  if (islastPageToShow) {      li.push(<li key='last' className={currentPage === totalPages ? 'active' : ''}>
          <a href="#" onClick={toLastPage}>&raquo;</a>
      </li>);  }
  return(
    <ul className="pagination">{li}</ul>
  );
};

GridPager.propTypes = {  totalPages: PropTypes.number,  currentPage: PropTypes.number,  onChange : PropTypes.func,  toLastPage : PropTypes.func
};

export default GridPager;
