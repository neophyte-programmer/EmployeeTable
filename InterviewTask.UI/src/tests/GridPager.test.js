import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import GridPager from './../components/table/GridPager';

describe('<GridPager />',() => {
  it('renders list (ul) and 2 items (li) which one has active class',
    () => {
      const props = { currentPage: 1, totalPages: 2, onChange: () => {}, toLastPage: () => {} };
      const wrapper = shallow(<GridPager {...props} />);
      expect(wrapper.find('ul').length).toBe(1);
      expect(wrapper.find('li').length).toBe(2);
      expect(wrapper.find('.active').length).toBe(1);
    });

  it('renders list (ul) and 4 items (li) which one has active class and raquo item',
    () => {
      const props = { currentPage: 1, totalPages: 4, onChange: () => { }, toLastPage: () => { } };
      const wrapper = shallow(<GridPager {...props} />);
      expect(wrapper.find('ul').length).toBe(1);
      expect(wrapper.find('li').length).toBe(4);
      expect(wrapper.find('li').last().text()).toEqual('»');
    });
});
