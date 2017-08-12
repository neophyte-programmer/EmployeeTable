import * as Types from '../actions/actionTypes';

export default function employeeReducer(state = [], action) {
  switch (action.type) {
  case Types.LOAD_EMPLOYEES_SUCCESS:
    return action.employees;

  default:
    return state;
  }
}
