import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import moment from 'moment'

  const changeModalState = jest.fn()

it('renders without crashing', () => {
  const wrapper = shallow(
    <Header changeModalState={changeModalState} />
  );

  expect(wrapper).toMatchSnapshot()
});

it("contains today's date", () => {
  const wrapper = mount(
      <Header changeModalState={changeModalState} />
    );

  const text = wrapper.find('div.Date').text();

  expect(text).toContain(moment().format('MMMDD'));
});

it("calls changeModalState on button click", () => {
  const wrapper = mount(
    <Header changeModalState={changeModalState} />
  );

  wrapper
    .find("button")
    .simulate("click");

  expect(changeModalState).toBeCalled();
});