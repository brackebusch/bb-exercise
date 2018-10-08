import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '650px',
    height: '550px',
  }
};

class App extends Component {
  state = {data: false, index: 0, showModal: false}

  async componentDidMount(){
    const response = await fetch('/work_orders')
    const data = await response.json()
    this.setState({data})
  }

  renderRows() {
    if(!this.state.data){
      return <tr><td>Loading...</td></tr>
    } 
    const rows = []
    for(let i = this.state.index; i < (this.state.index + 25); i++){
      rows.push(
        <tr key={this.state.data[i].id} className={i % 2 === 0 ? '' : 'Striped'}>
          <td width='22%'>{this.state.data[i].coffee}</td>
          <td>{this.state.data[i].method}</td>
          <td>{this.state.data[i].cases}</td>
          <td>{this.state.data[i].packets}</td>
          <td>
            {moment(this.state.data[i].ship_date).format('MM/DD/YYYY')}
            {this.state.data[i].priority ? ' ★' : ''}
          </td>
          <td className='Order'>#{this.state.data[i].id}</td>
          <td><i className='fas fa-eye'></i></td>
        </tr>
      )
    }
    return rows
  }

  changeModalState() {
    this.setState({showModal: !this.state.showModal})
  }

  saveAndClose() {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return (
      <div className='App'>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={() => this.changeModalState()}
          style={customStyles}
          contentLabel='Example Modal'
        >
        <span className='Close' onClick={() => this.changeModalState()}>&times;</span>
        <div className='ModalBody'>
          <span>Perfectly Ground Work Orders</span>
          <br/>
          Instructional text would go here - Lorem ipsum dolo sit amet, consecteur adipiscing elit. Nallam feugiat libero eget diam.
          <form>
            <div className={'Inputs'}>
              <div>Brew Method *</div>
                <select className={'Select'}>
                  <option value="Bella Donovan">Bella Donovan</option>
                  <option value="Giant Steps">Giant Steps</option>
                </select>
            </div>
            <div className={'Inputs'}>
              <div>Brew Method *</div>
                <select className={'Select'}>
                  <option value="AeroPress">AeroPress</option>
                  <option value="Coffee Maker">Coffee Maker</option>
                  <option value="Cold Brew">Cold Brew</option>
                  <option value="French Press">French Press</option>
                  <option value="Pour Over">Pour Over</option>
                </select>
            </div>
            <div className={'Inputs'}>
              <div>Ship Date *</div>
                <select className={'Select'}>
                  <option value="Bella Donovan">Bella Donovan</option>
                  <option value="Giant Steps">Giant Steps</option>
                </select>
            </div>
            <div className={'InputsSmall'}>
              <div>
                <div>Number of Cases *</div>
                <select className={'SelectSmall'}>
                  <option value="1">1</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div>
                <div>Packets per Case *</div>
                <select className={'SelectSmall'}>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </form>
          <button onClick={() => this.saveAndClose()}>SUBMIT WORK ORDER</button>
        </div>
        </Modal>






        <div className='Body'>
          <img src={logo} className='App-logo' alt='logo' />

          <div className='Header'>
            <div className='Date-Title'>
              <div className='Date'>
                <span className='Month'>{moment().format('MMM')}</span>
                <span className='Day'>{moment().format('DD')}</span>
              </div>
              <span className='Title'>Perfectly Ground Work Orders</span>
            </div>
            <button onClick={() => this.changeModalState()}>CREATE ORDER</button>
          </div>

          <div className='Table'>
            <h4>ORDERS</h4>
            <hr/>
            <table>
              <thead>
                <tr>
                  <th><br/>Coffee</th>
                  <th><br/>Method</th>
                  <th>Number of Cases</th>
                  <th>Packets per Case</th>
                  <th><br/>Ship Date <i className='fas fa-sort-amount-down'></i></th>
                  <th><br/>Order</th>
                  <th><br/>View</th>
                </tr>
              </thead>
              <tbody>
                {this.renderRows()}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
