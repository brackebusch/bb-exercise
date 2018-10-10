import React from 'react';
import ReactDOM from 'react-dom';
import ModalView from './Modal';

const changeModalState = jest.fn()
const saveAndClose = jest.fn()
const handleInputChange = jest.fn()
const setDate = jest.fn()
const setError = jest.fn()
const showModal = true
const error = 'Test Error'
const workOrder = {
  coffee: 'Giant Steps',
  method: 'Cold Brew',      
  ship_date: '10/08/2018',
  cases: '25',
  packets: '25',
  notes: '',
  priority: true,
}

it('renders without crashing', () => {
  const wrapper = shallow(
    <ModalView  showModal={showModal} 
                changeModalState={changeModalState}
                saveAndClose={saveAndClose}
                handleInputChange={handleInputChange}
                setError={setError}
                error={error}
                setDate={setDate}
                workOrder={workOrder}/>
  );

  expect(wrapper).toMatchSnapshot()
});

it("contains fields for building a work order", () => {
  const wrapper = mount(
    <ModalView  showModal={showModal} 
                changeModalState={changeModalState}
                saveAndClose={saveAndClose}
                handleInputChange={handleInputChange}
                setError={setError}
                error={error}
                setDate={setDate}
                workOrder={workOrder}/>
  );

  const checkbox = wrapper.find('[type="checkbox"]')
  const select = wrapper.find('select')
  const notes = wrapper.find('#notes')
  const date = wrapper.find('.rdtPicker')

  expect(checkbox).toHaveLength(1)
  expect(select).toHaveLength(4)
  expect(notes).toHaveLength(1)
  expect(date).toHaveLength(1)
});

it("renders errors", () => {
  const wrapper = mount(
    <ModalView  showModal={showModal} 
                changeModalState={changeModalState}
                saveAndClose={saveAndClose}
                handleInputChange={handleInputChange}
                setError={setError}
                error={error}
                setDate={setDate}
                workOrder={workOrder}/>
  );
  const text = wrapper.find('.alert').text()

  expect(text).toContain('Test Error');
});

it('calls handleInputChange with input change', () => {
  const wrapper = mount(
    <ModalView  showModal={showModal} 
                changeModalState={changeModalState}
                saveAndClose={saveAndClose}
                handleInputChange={handleInputChange}
                setError={setError}
                error={error}
                setDate={setDate}
                workOrder={workOrder}/>
  );
  wrapper.find('#notes').simulate('change', {target: {value: 'Notes about order'}});

  expect(handleInputChange).toBeCalled();
});


it('calls changeModalState on close', () => {
  const wrapper = mount(
    <ModalView  showModal={showModal} 
                changeModalState={changeModalState}
                saveAndClose={saveAndClose}
                handleInputChange={handleInputChange}
                setError={setError}
                error={error}
                setDate={setDate}
                workOrder={workOrder}/>
  );
  wrapper.find('.Close').simulate('click');

  expect(changeModalState).toBeCalled();
});

it("submits form if all fields are filled out", () => {
  const wrapper = mount(
    <ModalView  showModal={showModal} 
                changeModalState={changeModalState}
                saveAndClose={saveAndClose}
                handleInputChange={handleInputChange}
                setError={setError}
                error={error}
                setDate={setDate}
                workOrder={workOrder}/>
  );

  wrapper.find("button").simulate("click");

  expect(saveAndClose).toBeCalled();
});

it("checks if fields are valid on button click", () => {
  let errorOrder = Object.assign({}, workOrder)
  errorOrder.cases = '#';
  const wrapper = mount(
    <ModalView  showModal={showModal} 
                changeModalState={changeModalState}
                saveAndClose={saveAndClose}
                handleInputChange={handleInputChange}
                setError={setError}
                error={error}
                setDate={setDate}
                workOrder={errorOrder}/>
  );

  wrapper.find("button").simulate("click");

  expect(setError).toBeCalled();
});



