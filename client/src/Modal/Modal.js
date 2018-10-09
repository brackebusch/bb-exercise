import React from 'react';
import { Modal, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap'
import './Modal.css';

const ModalView = ({changeModalState, showModal, saveAndClose}) => {

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
          <FormControl componentClass="date"/>
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



{/* <div className='Inputs SmallInputs'>

<div>
  <div>Packets per Case <span className='Red'>*</span></div>
  <select className='Select SmallSelect'>
    <option value="25">25</option>
    <option selected value="50">50</option>
  </select>
</div>          
</div> */}


{/* <div>
<div>Number of Cases <span className='Red'>*</span></div>
<select className='Select SmallSelect'>
  <option value="" defaultValue disabled hidden>#</option>
  <option value="1">1</option>
  <option value="5">5</option>
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="50">50</option>
  <option value="100">100</option>
</select>
</div> */}


        {/* <div className='Inputs'>
          <div>Coffee <span className='Red'>*</span></div>
            <select className='Select'>
              <option value="" defaultValue disabled hidden>Choose One</option>
              <option value="Bella Donovan">Bella Donovan</option>
              <option value="Giant Steps">Giant Steps</option>
            </select>
        </div> */}
     {/* <div className='Inputs'>
          <div>Brew Method <span className='Red'>*</span></div>
            <select className='Select'>
              <option value="" defaultValue disabled hidden>Choose One</option>
              <option value="AeroPress">AeroPress</option>
              <option value="Coffee Maker">Coffee Maker</option>
              <option value="Cold Brew">Cold Brew</option>
              <option value="French Press">French Press</option>
              <option value="Pour Over">Pour Over</option>
            </select>
        </div> */}
        {/* <div className='Inputs'>
          <div>Ship Date <span className='Red'>*</span></div>
            <select className='Select'>
              <option value="Bella Donovan">Bella Donovan</option>
              <option value="Giant Steps">Giant Steps</option>
            </select>
        </div> */}

// import Modal from 'react-modal';

// const customStyles = {
//   content : {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     width: '650px',
//     height: '550px',
//   }
// };
// const {level, message} = props;  

// <Modal
// isOpen={this.state.showModal}
// onRequestClose={() => this.changeModalState()}
// style={customStyles}
// contentLabel='Example Modal'
// >
// <span className='Close' onClick={() => this.changeModalState()}>&times;</span>
// <div className='ModalBody'>
// <span>Perfectly Ground Work Orders</span>
// <br/>
// Instructional text would go here - Lorem ipsum dolo sit amet, consecteur adipiscing elit. Nallam feugiat libero eget diam.
// <form>
//   <div className={'Inputs'}>
//     <div>Brew Method *</div>
//       <select className={'Select'}>
//         <option value="" selected disabled hidden>Choose One</option>
//         <option value="Bella Donovan">Bella Donovan</option>
//         <option value="Giant Steps">Giant Steps</option>
//       </select>
//   </div>
//   <div className={'Inputs'}>
//     <div>Brew Method *</div>
//       <select className={'Select'}>
//         <option value="" selected disabled hidden>Choose One</option>
//         <option value="AeroPress">AeroPress</option>
//         <option value="Coffee Maker">Coffee Maker</option>
//         <option value="Cold Brew">Cold Brew</option>
//         <option value="French Press">French Press</option>
//         <option value="Pour Over">Pour Over</option>
//       </select>
//   </div>
//   <div className={'Inputs'}>
//     <div>Ship Date *</div>
//       <select className={'Select'}>
//         <option value="Bella Donovan">Bella Donovan</option>
//         <option value="Giant Steps">Giant Steps</option>
//       </select>
//   </div>
//   <div className={'InputsSmall'}>
//     <div>
//       <div>Number of Cases *</div>
//       <select className={'SelectSmall'}>
//         <option value="" selected disabled hidden>#</option>
//         <option value="1">1</option>
//         <option value="5">5</option>
//         <option value="10">10</option>
//         <option value="20">20</option>
//         <option value="50">50</option>
//         <option value="100">100</option>
//       </select>
//     </div>
//     <div>
//       <div>Packets per Case *</div>
//       <select className={'SelectSmall'}>
//         <option value="25">25</option>
//         <option selected value="50">50</option>
//       </select>
//     </div>
//   </div>
// </form>
// <button onClick={() => this.saveAndClose()}>SUBMIT WORK ORDER</button>
// </div>
// </Modal>