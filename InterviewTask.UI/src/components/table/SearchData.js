import React , {PropTypes} from 'react';

const SearchData = ({ changeHandler }) => {
  return (
    <div className="box">
       <div className="container-1">
           <span className="icon"><i className="fa fa-search"></i></span>
           <input type="search" id="search" placeholder="Search..." onChange={changeHandler} />
       </div>
     </div>
  );
};

SearchData.propTypes = {
    changeHandler : PropTypes.func
};

export default SearchData;