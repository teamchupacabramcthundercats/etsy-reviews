import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App';

it('should render without throwing an error', () => {
  expect(shallow(<App />).contains(<div><p>React Test</p></div>)).toBe(true);
});
