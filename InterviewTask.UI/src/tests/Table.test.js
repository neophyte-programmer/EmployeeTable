import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Table from './../components/table/Table';

const employees = [
  { "Id": 1, "FirstName": "Tom", "LastName": "Miller", "Title": "PM", "ProductsSold": 10, "Referal": "Andrew Smith" },
  { "Id": 2, "FirstName": "Andrew", "LastName": "Smith", "Title": "DEV", "ProductsSold": 2, "Referal": "Tom Soyer" },
  { "Id": 3, "FirstName": "Adena", "LastName": "Mccoy", "Title": "PM", "ProductsSold": 12, "Referal": "Tara Wolf" }
];

describe('<Table />', () => {
  it('renders table headers and TableRows',
    () => {
      const props = {
        employees: employees,
        sortChanged: () => { },
        sortOrder: '',
        sortColumnName: ''
      };
      const wrapper = shallow(<Table {...props} />);
      expect(wrapper.find('TableRow').length).toBe(3);
      expect(wrapper.find('tr').length).toBe(1);
      expect(wrapper.find('th').length).toBe(5);
  });

  it('renders table header',
    () => {
      const props = {
        employees: employees,
        sortChanged: () => { },
        sortOrder: 'asc',
        sortColumnName: 'FirstName'
      };
      const wrapper = shallow(<Table {...props} />);
      expect(wrapper.find('#FirstName').text()).toEqual('First Name ');
      expect(wrapper.find('#LastName').text()).toEqual('Last Name ');
      expect(wrapper.find('#Title').text()).toEqual('Title ');
      expect(wrapper.find('#ProductsSold').text()).toEqual('Products Sold ');
      expect(wrapper.find('#Referal').text()).toEqual('Refers To ');
      });

  it('renders table classes',
    () => {
      const props = {
        employees: employees,
        sortChanged: () => {},
        sortOrder: 'asc',
        sortColumnName: 'FirstName'
      };
      const wrapper = shallow(<Table {...props} />);
      expect(wrapper.find('.fa.fa-sort-asc').length).toBe(1);
      expect(wrapper.find('.fa.fa-sort').length).toBe(4);
    });

}); 
