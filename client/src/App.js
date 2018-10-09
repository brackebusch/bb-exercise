import React, { Component } from 'react';
import Header from './Header/Header';
import Table from './Table/Table'
import ModalView from './Modal/Modal'
import { Pagination } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {workOrders: [], page: 1, showModal: false};
    this.changeModalState = this.changeModalState.bind(this);
    this.saveAndClose = this.saveAndClose.bind(this);
    this.setPage = this.setPage.bind(this);
    this.getPageCount = this.getPageCount.bind(this);
  }

  async componentDidMount(){
    const response = await fetch('/work_orders')
    const workOrders = await response.json()
    this.setState({workOrders})
    console.log(workOrders);
  }

  changeModalState() {
    this.setState({showModal: !this.state.showModal})
  }

  saveAndClose() {
    this.setState({showModal: !this.state.showModal})
  }

  setPage(page) {
    console.log(page);
    if(page < 1 || page > this.getPageCount()){
      return
    }
    this.setState({page})
  }

  getPageCount() {
    const {
      state: {
        workOrders
      }
    } = this;
    return workOrders.length % 25 === 0 ? workOrders.length / 25 : workOrders.length / 25 + 1
  }

  render() {
    const {
      state: {
        workOrders,
        page,
        showModal,
      },
      changeModalState,
      saveAndClose,
      setPage,
      getPageCount,
    } = this;

    const items = [];
    const pageCount = getPageCount()
    for (let number = 1; number <= pageCount; number++) {
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === page} 
          onClick={() => setPage(number)}>
          {number}
        </Pagination.Item>
      );
    }

    return (
      <div className='App'>
        <div className='Body'>
          <Header changeModalState={changeModalState} />
          <ModalView  showModal={showModal} 
                      changeModalState={changeModalState}
                      saveAndClose={saveAndClose} />
          <Table  workOrders={workOrders.slice((page-1) * 25, (page-1) * 25 + 25)}/>
          <Pagination bsSize="medium">
            <Pagination.First />
            <Pagination.Item  onClick={() => setPage(page - 1)}>Prev</Pagination.Item>
            {items}
            <Pagination.Item  onClick={() => setPage(page + 1)}>Next</Pagination.Item>
            <Pagination.Last />
          </Pagination>          
        </div>      
      </div>
    );
  }
}

export default App;
