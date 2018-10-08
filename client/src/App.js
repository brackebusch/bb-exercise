import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
// import { Table } from 'evergreen-ui'
// import { TableHead, TextTableHeaderCell, TextTableCell, TableRow } from 'evergreen-ui/commonjs/table';

class App extends Component {
  state = {data: false, index: 0}

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
    console.log(this.state.data);
    for(let i = this.state.index; i < (this.state.index + 25); i++){
      rows.push(
        <tr key={this.state.data[i].id} className={i % 2 === 0 ? '' : 'Striped'}>
          <td width="22%">{this.state.data[i].coffee}</td>
          <td>{this.state.data[i].method}</td>
          <td>{this.state.data[i].cases}</td>
          <td>{this.state.data[i].packets}</td>
          <td>
            {moment(this.state.data[i].ship_date).format('MM/DD/YYYY')}
            {this.state.data[i].priority ? ' ★' : ''}
          </td>
          <td>#{this.state.data[i].id}</td>
          <td>View</td>
        </tr>
      )
    }
    return rows
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
              <thead>
                <tr>
                  <th><br/>Coffee</th>
                  <th><br/>Method</th>
                  <th>Number of Cases</th>
                  <th>Packets per Case</th>
                  <th><br/>Ship Date</th>
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
