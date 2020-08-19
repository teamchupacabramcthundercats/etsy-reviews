/**
 * @jest-environment jsdom
*/
import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
import App from '../client/components/App';
import ReviewList from '../client/components/ReviewList';

const sampleData = [
  {
    _id: '5f31d7ebab9f3f84d48d7944',
    name: 'Arvid',
    rating: 1,
    date: '2019-08-02T19:59:42.918Z',
    review: 'Tempora repellat perferendis ipsa.',
    purchased_item_name: 'Intelligent Concrete Sausages',
    purchased_item_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/091.jpg',
    attached_pic: null,
    profile_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/218.jpg'
  },
  {
    _id: '5f31d7ebab9f3f84d48d7945',
    name: 'Travon',
    rating: 3,
    date: '2019-05-03T04:20:40.980Z',
    review: 'Et id voluptas et.',
    purchased_item_name: 'Intelligent Concrete Sausages',
    purchased_item_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/092.jpg',
    attached_pic: null,
    profile_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/234.jpg'
  },
  {
    _id: '5f31d7ebab9f3f84d48d7946',
    name: 'Adalberto',
    rating: 2,
    date: '2019-10-06T13:16:20.196Z',
    review: 'Maiores aliquam qui.',
    purchased_item_name: 'Intelligent Concrete Sausages',
    purchased_item_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/032.jpg',
    attached_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/040.jpg',
    profile_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/243.jpg'
  },
  {
    _id: '5f31d7ebab9f3f84d48d7947',
    name: 'Nina',
    rating: 3,
    date: '2019-09-23T13:43:18.090Z',
    review: 'Qui quis numquam ea.',
    purchased_item_name: 'Intelligent Concrete Sausages',
    purchased_item_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/027.jpg',
    attached_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/023.jpg',
    profile_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/220.jpg'
  },
];

jest.mock('axios');

describe('main page components', () => {
  beforeAll(() => {
    axios.get.mockResolvedValue(({ reviews: sampleData }));
  });

  it('should render without throwing an error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render reviewlist component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('ReviewList').length).toBe(1);
  });

  it('should render reviewlistentry components as loading', () => {
    const wrapper = shallow(<ReviewList reviews={sampleData} />);
    console.log(wrapper.debug());
    expect(wrapper.find('ReviewListEntry').length).toBe(4);
  });

  it('should change value of select element', () => {
    const container = mount(<App />);
    container.find('select').simulate('change', { target: { value: 'newest' } });
    expect(container.find('select').props().value).toBe('newest');
  });
});
