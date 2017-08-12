import EmployeeApi from '../api/employeeApi';
import * as Types from './actionTypes';
import { ajaxCallError, beginAjaxCall } from './loadingAction';

export function loadEmployeesSuccess(employees) {
  return { type: Types.LOAD_EMPLOYEES_SUCCESS, employees };
}

export function loadEmployees() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return EmployeeApi.getAllEmployees().then(employees => {
        dispatch(loadEmployeesSuccess(employees.data));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
