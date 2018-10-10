import React from 'react';
import { Modal, FormGroup, FormControl, ControlLabel, Checkbox} from 'react-bootstrap';
import Datetime from 'react-datetime';
import Error from './Error'
import moment from 'moment'
import './Modal.css';
import './Datetime.css';

const ModalView = ({
    changeModalState, 
    showModal, 
    setError,
    saveAndClose, 
    handleInputChange,
    error,
    setDate, 
    workOrder: {
      coffee,
      method,
      ship_date,
      cases,
      packets,
      notes,
      priority
    }
    }) => {
  
  //prevents ship dates from being created in the past
  const yesterday = moment().subtract( 1, 'day' );
  const valid = ( current ) => {
    return current.isAfter(yesterday);
  }

  //validates fields are population before submission 
  const checkForm = () => {
    let errorMessage = ''
    if(coffee === 'Choose One'){ errorMessage += 'Select Coffee. '}
    if(method === 'Choose One'){ errorMessage += 'Select Brew Method. '}
    if(ship_date === ''){ errorMessage += 'Choose a Ship Date. '}
    if(cases === '#'){ errorMessage += 'Select Cases. '}
    return errorMessage.length ? setError(errorMessage) : saveAndClose();
  }

  return (
    <Modal show={showModal} onHide={changeModalState} dialogClassName="ModalContainer">
    <div className='ModalBody'>
    <span className='Close' onClick={changeModalState}>&times;</span>
      <h3>Perfectly Ground Work Orders</h3>
      <br/>
      Instructional text would go here - Lorem ipsum dolo sit amet, consecteur adipiscing elit. Nallam feugiat libero eget diam.
      <form id='workOrderForm'>
        <FormGroup controlId="coffee">
          <ControlLabel>Coffee <span className='Red'>*</span></ControlLabel>
          <FormControl name="coffee" componentClass="select" value={coffee} onChange={handleInputChange}>
              <option value="Choose One" hidden>Choose One</option>
              <option value="Bella Donovan">Bella Donovan</option>
              <option value="Giant Steps">Giant Steps</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="method">
          <ControlLabel>Brew Method <span className='Red'>*</span></ControlLabel>
          <FormControl name="method" componentClass="select" value={method} onChange={handleInputChange}>
              <option value="Choose One" hidden>Choose One</option>
              <option value="AeroPress">AeroPress</option>
              <option value="Coffee Maker">Coffee Maker</option>
              <option value="Cold Brew">Cold Brew</option>
              <option value="French Press">French Press</option>
              <option value="Pour Over">Pour Over</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="date">
          <ControlLabel>Ship Date <span className='Red'>*</span></ControlLabel>
            <Datetime 
              dateFormat="MM/DD/YYYY" 
              timeFormat={false}
              isValidDate={valid} 
              closeOnSelect={true}
              value={ship_date}
              onChange={setDate}
              />
        </FormGroup>

        <div className='SmallInputs'>
        {/* The mockup indicated a drop-down here, but did not specify amounts. 
        Unless restricted due to shipping concerns a free input might make more sense */}
          <FormGroup controlId="cases">
            <ControlLabel>Number of Cases <span className='Red'>*</span></ControlLabel>
            <FormControl name="cases" componentClass="select" value={cases} onChange={handleInputChange}>
                <option value="#" hidden>#</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="packets">
            <ControlLabel>Packets per Case <span className='Red'>*</span></ControlLabel>
            <FormControl name="packets" componentClass="select" value={packets} onChange={handleInputChange}>
                <option value="25">25</option>
                <option value="50">50</option>
            </FormControl>
          </FormGroup>
        </div>

        <FormGroup controlId="notes" bsSize='small'>
          <ControlLabel>Notes</ControlLabel>
          <FormControl name="notes" type="text" value={notes} onChange={handleInputChange}/>
        </FormGroup>

        <FormGroup>
          <Checkbox id='priority' name='priority' value={priority} onChange={handleInputChange}>Priority</Checkbox>
        </FormGroup>
      </form>
      {/* might build error rendering out for use among all components with greater project scope */}
      <Error error={error} /> 
      <button onClick={checkForm} id='submit'>SUBMIT WORK ORDER</button>
    </div>
    </Modal>
  );
}

export default ModalView