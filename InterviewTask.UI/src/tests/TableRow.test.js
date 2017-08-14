import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TableRow from './../components/table/TableRow';

function setup() {
  const props = {
      employee: {
        Id : 1,
      FirstName: 'TestName',
      LastName: 'LastName',
      Title: 'Title',
      ProductsSold: 12,
      Referal: 'RefersTo'
    }
  };

  return shallow(<TableRow {...props} />);
}

describe('<TableRow />',() => {
    it('renders table row (tr) and 5 table data (td)',() => {
        const wrapper = setup();
        expect(wrapper.find('tr').length).toBe(1);
        expect(wrapper.find('td').length).toBe(5);
    });

  it('check table data',() => {
      const wrapper = setup();
      expect(wrapper.find('td').first().text()).toEqual('TestName');
      expect(wrapper.find('tr').childAt(1).text()).toEqual('LastName');
      expect(wrapper.find('tr').childAt(2).text()).toEqual('Title');
      expect(wrapper.find('tr').childAt(3).text()).toEqual('12');
      expect(wrapper.find('td').last().text()).toEqual('RefersTo');
    });
});
