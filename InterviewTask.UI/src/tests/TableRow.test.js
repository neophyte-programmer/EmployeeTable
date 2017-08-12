import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import TableRow from './../components / table / TableRow';

function setup() {
  const props = {
    employee: {
      FirstName: 'TestName'
    }
  };

  return shallow(<TableRow {...props} />);
}
describe('TableRow via Enzyme', () => {
  it('renders table row (tr) and table data (td)', () => {
    const wrapper = setup();
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('td').length).toBe(1).text().toEqual('TestName');
  });
/*
  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when savin', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });*/
});
