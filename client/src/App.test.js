import React from 'react';
import App from './App';
import moment from 'moment'

it('renders without crashing', () => {
  const wrapper = shallow(
    <App />
  );

  expect(wrapper).toMatchSnapshot()
});

it('set state when date is passed to setDate', () => {
  let date = moment()
  const wrapper = mount(<App />);
  const instance = wrapper.instance();
  expect(wrapper.state('workOrder').ship_date).toBe('');
  instance.setDate(date);
  expect(wrapper.state('workOrder').ship_date).toBe(date);
});