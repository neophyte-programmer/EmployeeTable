import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as employeeActions from '../../actions/employeeActions';
import Table from './Table';
import GridPager from './GridPager';
import SearchData from './SearchData';
import { browserHistory } from 'react-router';
import { employeesProperties } from '../../selectors/selectors';
import toastr from 'toastr';

class TablePage extends React.Component {
  constructor(props, context) {
      super(props, context);

    this.state = {
       employees: this.props.employees || [],
       totalPages: 1,
       currentPage: 1,
       sortColumnName: 'FirstName',
       sortOrder: 'asc',
       typed : '',
       noData : true
    };

    this.pagingChanged = this.pagingChanged.bind(this);
    this.updatePageState = this.updatePageState.bind(this);
    this.updateSortOrderState = this.updateSortOrderState.bind(this);
    this.changeSearchRequest = this.changeSearchRequest.bind(this);
    this.toLastPage = this.toLastPage.bind(this);
  }

  updatePageState(event) {
      const field = +event.target.innerText;
      this.setState({ currentPage: field });
  }

  updateSortOrderState(event) {
      const field = event.target.id.trim();
      this.setState({
          sortOrder: this.state.sortOrder === 'asc' ? 'desc' : 'asc',
          sortColumnName: field
      }); 
  }

  pagingChanged(pageNumber) {
    this.state.currentPage = pageNumber;
  }

  changeSearchRequest(event) {
    this.setState({ typed: event.target.value });
  }

  toLastPage() {
    this.setState({ currentPage: this.state.totalPages });
  }
   
  populateData() {
    let pageSize = 10;
    let pattern = this.state.typed;
    let start = pageSize * (this.state.currentPage - 1) === 0 ? 0 : pageSize * (this.state.currentPage - 1);
    if (this.state.typed.length > 0) {
        let data = this.props.employees;
      if (data.length > 0) {
        this.state.employees = data.filter(function(el) {
          return el.FirstName.indexOf(pattern) >= 0 || el.LastName.indexOf(pattern) >= 0;
        });
        this.state.totalPages = employeesProperties(this.state.employees).totalPages;
        this.state.employees = this.state.employees.slice(start, start + 9);
       
        this.state.noData = this.state.employees.length > 0 ? false : true;
        this.state.currentPage = 1;
      }  
    } else {
      let sortDirection = this.state.sortOrder == 'asc' ? '' : '-';
      let sort = sortDirection + this.state.sortColumnName;
      if (this.props.employees) {
        let sortedEmployeeList = this.props.employees.sort(
          this._dynamicSort(sort));
        
        this.state.employees = sortedEmployeeList.slice(start, start + 9);
        this.state.totalPages = this.props.totalPages;
        this.state.noData = this.props.employees.length > 0 ? false : true;
      }
    }
  }

  _dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }

  render() {
    return (
        <div>
            {this.populateData()}
            <SearchData changeHandler={this.changeSearchRequest} />
            {this.state.noData == true ? <div className="noData">No Data Found</div> :
                <div>
                  <Table employees={this.state.employees} sortChanged={this.updateSortOrderState}
                    sortOrder={this.state.sortOrder} sortColumnName={this.state.sortColumnName} />
                  <GridPager totalPages={this.state.totalPages} currentPage={this.state.currentPage}
                      onChange={this.updatePageState} toLastPage={this.toLastPage} />
                </div>
            }
       </div>
    );
  }
}

TablePage.propTypes = {
  employees: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number 
};

function mapStateToProps(state, ownProps) {
  return {
      employees: state.employeeReducer,
      totalPages: employeesProperties(state.employeeReducer).totalPages,
      currentPage: employeesProperties(state.employeeReducer).currentPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
