﻿import React, { PropTypes} from 'react';

const GridPager = ({ currentPage, totalPages, onChange, toLastPage }) => {
    let li = [];
    let islastPageToShow = totalPages >= 3 ? true : false;

  for (let i = 1; i < totalPages; i++) {

          <a href="#" onClick={toLastPage}>&raquo;</a>
      </li>);

    <ul className="pagination">{li}</ul>
  );
};

GridPager.propTypes = {
};

export default GridPager;