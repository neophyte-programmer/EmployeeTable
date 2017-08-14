import expect from 'expect';
require('./../selectors/selectors');
import { employeesProperties } from './../selectors/selectors';

describe('Employee Selectors', () => {
  describe('employeesProperties', () => {
    it('should return data about employee table', () => {
      const employees = [
        { "Id": 1 } ,
        { "Id": 2 },
        { "Id": 3 }
      ];

      const expected = { totalPages: 1, currentPage: 1 };

      expect(employeesProperties(employees)).toEqual(expected);
    });

    it('should return 2 total pages', () => {
      const employees = [
          { "Id": 1 }, { "Id": 2 }, { "Id": 3 }, { "Id": 4 }, { "Id": 5 }, { "Id": 6 },
        { "Id": 7 }, { "Id": 8 }, { "Id": 9 }, { "Id": 10 }, { "Id":11 }, { "Id": 12 }
      ];

      const expected = { totalPages: 2, currentPage: 1 };

      expect(employeesProperties(employees)).toEqual(expected);
    });
  });
});
