import React from 'react';
import { shallow } from 'enzyme';
import ReviewHeader from '../client/components/ReviewHeader';
import { ReactComponent as Star } from '../client/star.svg';

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
  {
    _id: '5f31d7ebab9f3f84d48d7948',
    name: 'Michele',
    rating: 3,
    date: '2019-08-03T23:01:25.636Z',
    review: 'Dolore aut iure pariatur quod sed.',
    purchased_item_name: 'Intelligent Concrete Sausages',
    purchased_item_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/066.jpg',
    attached_pic: null,
    profile_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/210.jpg'
  },
  {
    _id: '5f31d7ebab9f3f84d48d7949',
    name: 'Nicolas',
    rating: 2,
    date: '2020-05-11T16:30:03.355Z',
    review: 'Consequatur occaecati eligendi est.',
    purchased_item_name: 'Intelligent Concrete Sausages',
    purchased_item_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/020.jpg',
    attached_pic: null,
    profile_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/231.jpg'
  },
  {
    _id: '5f31d7ebab9f3f84d48d794a',
    name: 'Winston',
    rating: 1,
    date: '2019-11-24T07:11:57.113Z',
    review: 'Soluta fuga facere magnam.',
    purchased_item_name: 'Intelligent Concrete Sausages',
    purchased_item_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/079.jpg',
    attached_pic: null,
    profile_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/246.jpg'
  },
  {
    _id: '5f31d7ebab9f3f84d48d794b',
    name: 'Trent',
    rating: 2,
    date: '2019-09-08T11:23:38.151Z',
    review: 'Molestiae repellendus quo blanditiis animi qui consequatur magni quia consequatur.',
    purchased_item_name: 'Intelligent Concrete Sausages',
    purchased_item_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/036.jpg',
    attached_pic: null,
    profile_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/238.jpg'
  },
];
const sort = 'recommended';

describe('review header component', () => {
  it('should render without errors', () => {
    shallow(<ReviewHeader reviews={sampleData} sort={sort} />);
  });
});
