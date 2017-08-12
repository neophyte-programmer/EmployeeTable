/*import React, { PropTypes}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import jquery from 'jquery';
import EmployeeGridRow from './EmpoyeeGridRow';
import GridPager from './GridPager';
import SearchData from'./SearchData';
import * as employeeActions from '../../actions/employeeActions';
require("font-awesome/css/font-awesome.css");
import toastr from 'toastr';

export class EmployeeGridTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
       employees: Object.assign({}, this.props.employees),
        /*Data: {
        List: [],
        TotalPage: 0,
        SortColumnName: null,
        SortOrder: null,
        CurrentPage: 1,
        PageSize: 10
      },*/
      /*List: [],
      TotalPage: 0,
      TableVisible: false
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.sortChanged = this.sortChanged.bind(this);
    this.pageChanged = this.pageChanged.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.employee.id != nextProps.employee.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({ employee: Object.assign({}, nextProps.employee) });
    }
  }

    componentDidMount () {
      this.populateData();
    }

    populateData () {
      let params = {
          PageSize: this.props.employees.PageSize,
          CurrentPage: this.props.employees.CurrentPage
      };
      if (this.props.employees.SortColumnName) {
          params.SortColumnName = this.props.employees.SortColumnName;
      }
      if (this.props.employees.SortOrder) {
          params.SortOrder = this.props.employees.SortOrder;
      }

     /* jquery.$.ajax({
        url: 'http://localhost:58327/api/Employees',
        type: 'GET',
        data: params,
        success: function (data) {
          this.setState({
            Data: data,
            List: data.List,
            TotalPage: data.TotalPage,
            TableVisible: data.List.length > 0 ? true : false
          });
        }.bind(this),
        error: function (err) {
          alert('Error');
        }.bind(this)
      }); */
/*
    }
    pageChanged(pageNumber, e) {
      e.preventDefault();
      this.setState({
        CurrentPage : pageNumber
      });
      this.populateData();
    }
    sortChanged (sortColumnName, order = 'asc', e) {
       e.preventDefault();
      let _temp = {
        SortColumnName: sortColumnName,
        CurrentPage: 1,
        SortOrder: order === 'asc' ? 'desc' : 'asc'
      };
      this.setState({
        employees: _temp
      });
      
      this.populateData();
    }
    _sortClass (filterName) {
        return 'fa ' + ((filterName === this.props.employees.SortColumnName) ? ('fa-sort-' + this.props.employees.SortOrder) : 'fa-sort');
    }
    changeHandler (data) {
        this.setState({

        List: data.List, TotalPage: data.TotalPage, TableVisible: data.TableVisible
      });
    }
    render()
    {
      let rows = [];
      if (this.state.List) {
          this.props.employees.List.forEach(function (item) {
          rows.push(<EmployeeGridRow key={item.Id} item={item} />);
        });
      }
      return (
        <div>
              <SearchData Data={this.props.employees.List} onChange={this.changeHandler} />
          {
            this.state.TableVisible
              ?
              <table>
                  <thead>
                      <tr>
                                  <th onClick={this.sortChanged('FirstName', this.props.employees.SortOrder)
                          }>First Name
                         <i className={this._sortClass('FirstName')}></i></th>
                                  <th onClick={this.sortChanged('LastName', this.props.employees.SortOrder)}>
                              Last Name
                         <i className={this._sortClass('LastName')}></i></th>
                                  <th onClick={this.sortChanged('Title', this.props.employees.SortOrder)}>
                              Title <i className={this._sortClass('Title')}></i>
                          </th>
                                  <th onClick={this.sortChanged('ProductsSold', this.props.employees.SortOrder)}>
                              ProductsSold <i className={this._sortClass('ProductsSold')}></i>
                          </th>
                                  <th onClick={this.sortChanged('Referal', this.props.employees.SortOrder)}>
                              Referal <i className={this._sortClass('Referal')}></i>
                          </th>
                      </tr>
                  </thead>
                  <tbody>{rows}</tbody>
              </table>
              :
              <h2>No data found</h2>
          }
          {
            this.state.TableVisible
              ? <GridPager Size={this.state.TotalPage} onPageChanged={this.pageChanged} CurrentPage={this.state
                .Data.CurrentPage} /> : ''
          }
        </div>
      );
    }
}


EmployeeGridRow.propTypes = {
    employees: React.PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  List: React.PropTypes.array.isRequired,
  TotalPage: React.PropTypes.number.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
EmployeeGridTable.contextTypes = {
  router: PropTypes.object
};

/*
function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course) return course[0]; //since filter returns an array, have to grab the first.
  return null;
} */

/*function mapStateToProps (state, ownProps){
  return {
      employees: state.data
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeGridTable);
*/