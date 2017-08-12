import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingSpinner from './LoadingSpinner';

const Header = ({loading}) => {
  return(
    <nav>
      {loading && <LoadingSpinner interval={1000} />}
    </nav>
  );
};

export default Header;
