import expect from 'expect';
import {loadEmployeesSuccess} from './../actions/employeeActions';
import * as types from './../actions/actionTypes';

describe('Employee Actions',
  () => {describe('loadEmployeesSuccess',() => {
      it('should create a LOAD_EMPLOYEES_SUCCESS action',
        () => {
          //arrange
          const employees = [{ id: 1, FirstName: "Tom" }];
          const expectedAction = {
            type: types.LOAD_EMPLOYEES_SUCCESS,
            employees: employees
          };

          //act
          const action = loadEmployeesSuccess(employees);

          //assert
          expect(action).toEqual(expectedAction);
        });
    });
  });