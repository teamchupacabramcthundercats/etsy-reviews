/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { shallow } from 'enzyme';
import ReviewListEntry from '../client/components/ReviewListEntry';
import { ReactComponent as Star } from '../client/graphics/star.svg';

const sampleData = {
  _id: '5f31d7ebab9f3f84d48d7944',
  name: 'Arvid',
  rating: 1,
  date: '2019-08-02T19:59:42.918Z',
  review: 'Tempora repellat perferendis ipsa.',
  purchased_item_name: 'Intelligent Concrete Sausages',
  purchased_item_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/091.jpg',
  attached_pic: null,
  profile_pic: 'https://ghrsea11-reviews-pics.s3-us-west-2.amazonaws.com/218.jpg',
};

describe('reviewlistentry component', () => {
  it('should render without errors', () => {
    shallow(<ReviewListEntry
      key={sampleData._id}
      name={sampleData.name}
      rating={sampleData.rating}
      date={sampleData.date}
      review={sampleData.review}
      attachedPic={sampleData.attached_pic}
      profilePic={sampleData.profile_pic}
      purchasedItemName={sampleData.purchased_item_name}
      purchasedItemPic={sampleData.purchased_item_pic}
    />);
  });
});
