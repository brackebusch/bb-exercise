import React from 'react';
import { Modal, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import Datetime from 'react-datetime';
import moment from 'moment'
import './Modal.css';
import './Datetime.css';


const ModalView = ({changeModalState, showModal, saveAndClose}) => {

  const yesterday = moment().subtract( 1, 'day' );
  const valid = ( current ) => {
    return current.isAfter(yesterday);
  };

  return (
    <Modal show={showModal} onHide={changeModalState} dialogClassName="ModalContainer">
    <div className='ModalBody'>
    <span className='Close' onClick={changeModalState}>&times;</span>
      <h3>Perfectly Ground Work Orders</h3>
      <br/>
      Instructional text would go here - Lorem ipsum dolo sit amet, consecteur adipiscing elit. Nallam feugiat libero eget diam.
      <form>
        <FormGroup controlId="coffee">
          <ControlLabel>Coffee <span className='Red'>*</span></ControlLabel>
          <FormControl componentClass="select" placeholder="Choose One">
              <option value="Choose One" defaultValue disabled hidden>Choose One</option>
              <option value="Bella Donovan">Bella Donovan</option>
              <option value="Giant Steps">Giant Steps</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="method">
          <ControlLabel>Brew Method <span className='Red'>*</span></ControlLabel>
          <FormControl componentClass="select" placeholder="Choose One">
              <option value="" defaultValue disabled hidden>Choose One</option>
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
              dateFormat="YYYY-MM" 
              timeFormat={false}
              isValidDate={valid} 
              disableOnClickOutside={true}
              closeOnSelect={true}

              />
        </FormGroup>

        <div className='SmallInputs'>
          <FormGroup controlId="cases">
            <ControlLabel>Number of Cases <span className='Red'>*</span></ControlLabel>
            <FormControl componentClass="select">
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
            <FormControl componentClass="select">
                <option value="25">25</option>
                <option selected value="50">50</option>
            </FormControl>
          </FormGroup>
        </div>

        <FormGroup controlId="notes" bsSize='small'>
          <ControlLabel>Notes</ControlLabel>
          <FormControl type="text"/>
        </FormGroup>

        <FormGroup>
          <Checkbox id='priority'>Priority</Checkbox>
        </FormGroup>
      </form>
      <button onClick={saveAndClose}>SUBMIT WORK ORDER</button>
    </div>
    </Modal>
  )
};

export default ModalView