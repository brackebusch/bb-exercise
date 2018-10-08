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
          <button>
            CREATE ORDER
          </button>
        </div>
          
        </div>
      </div>
    );
  }
}

export default App;
