import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';

class App extends Component {
  state = {data: null}

  async componentDidMount(){
    const response = await fetch('/work_orders')
    const data = await response.json()
    this.setState({data})
    console.log(data)
  }

  render() {
    return (
      <div className='App'>
        <div className='Body'>
          <img src={logo} className='App-logo' alt='logo' />

          <div className='Header'>
            <div className='Date-Title'>
              <div className='Date'>
                <span className='Month'>{moment().format('MMM')}</span>
                <span className='Day'>{moment().format('DD')}</span>
              </div>
              <span className='Title'>Perfectly Ground Work Work Orders</span>
            </div>
            <button>CREATE ORDER</button>
          </div>

          <div className='Table'>
            <h4>ORDERS</h4>
            <hr/>
            <table>
              <tr>
                <th>Coffee</th>
                <th>Method</th>
                <th>Number of Cases</th>
                <th>Packets per Case</th>
                <th>Ship Date</th>
                <th>Order</th>
                <th>View</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
