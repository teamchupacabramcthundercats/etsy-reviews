import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';
import ReviewList from '../client/components/ReviewList';
// import ReviewListEntry from '../client/components/ReviewListEntry';

describe('main page components', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('ReviewList').length).toBe(1);
  });

  it('should render four reviewlistentry components', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.find('ReviewListEntry').length).toBe(4);
  });
});

describe('test get request to api effect hook', () => {
  // const container = mount(<App />);

  xit('should get review object from server', () => {

  });
});
