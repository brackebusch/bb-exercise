import React from 'react';
import ReactDOM from 'react-dom';
import ModalView from './Modal';

const changeModalState = jest.fn()
const saveAndClose = jest.fn()
const handleInputChange = jest.fn()
const setDate = jest.fn()
const setError = jest.fn()
const checkForm = jest.fn()
const showModal = true
const error = 'Test Error'
const workOrder = {
    coffee: 'Choose One',
    method: 'Choose One',      
    ship_date: '',
    cases: '#',
    packets: '25',
    notes: '',
    priority: false,
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

it("checks if fields are valid on button click", () => {
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

  wrapper
    .find("button")
    .simulate("click");

  // expect(button).toHaveLength(1);
  expect(saveAndClose).toBeCalled();
});

// it('input fields should be filled correctly', () => {
//   const credentials = { username: 'leongaban', password: 'testpass' };
//   expect(loginComponent.find('#input-auth-username').length).toBe(1);

//   const usernameInput = loginComponent.find('#input-auth-username');
//   usernameInput.value = credentials.username;
//   expect(usernameInput.value).toBe('leongaban');

//   const passwordInput = loginComponent.find('#input-auth-password');
//   passwordInput.value = credentials.password;
//   expect(passwordInput.value).toBe('testpass');
// });

