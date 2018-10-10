import React, { Component } from 'react';
import Header from './Header/Header';
import Table from './Table/Table';
import ModalView from './Modal/Modal';
import { Pagination } from 'react-bootstrap';
import moment from 'moment';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      workOrders: [], 
      page: 1, 
      showModal: false,
      error: '',
      workOrder: {
        coffee: 'Choose One',
        method: 'Choose One',      
        ship_date: '',
        cases: '#',
        packets: '25',
        notes: '',
        priority: false,
      },
    };
    this.changeModalState = this.changeModalState.bind(this);
    this.saveAndClose = this.saveAndClose.bind(this);
    this.setPage = this.setPage.bind(this);
    this.getPageCount = this.getPageCount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);    
    this.setDate = this.setDate.bind(this);
    this.setError = this.setError.bind(this);
    this.reverse = this.reverse.bind(this);
  }

  //fetch data for rendering
  async componentDidMount(){
    const response = await fetch('/work_orders');
    const workOrders = await response.json();
    console.log(workOrders.slice(0, 25));
    
    this.setState({workOrders});
  }

  //for sorting table data asc or desc
  reverse() { 
    this.setState({workOrders: this.state.workOrders.reverse()});
  }

  //handles form errors
  setError(error) {
    this.setState({error});
  }

  //handles all form changes except for date
  handleInputChange(event) {
    let workOrder = Object.assign({}, this.state.workOrder);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    workOrder[name] = value;
    this.setState({workOrder});
  }

  //handles changes to ship date in work order modal
  setDate(ship_date){
    if(moment.isMoment(ship_date)){
      let workOrder = Object.assign({}, this.state.workOrder);
      workOrder.ship_date = ship_date;
      this.setState({workOrder});
    }
  }

  //this is called to open and close the modal, and 
  //since forms are controlled they require reset
  changeModalState() {
    if(this.state.showModal){
      let workOrder = {
        coffee: 'Choose One',
        method: 'Choose One',      
        date:  '',
        cases: '#',
        packets: '25',
        notes: '',
        priority: false,
      };
      this.setState({
        workOrder,
        error: '',
        showModal: false,
      });
    } else {
      this.setState({showModal: true})
    }
  }

  //saves data to server
  saveAndClose() {
    const {
      state: {
        workOrders,
        workOrder: {
          coffee,
          method,      
          ship_date,
          cases,
          packets,
          notes,
          priority,
        },
      }
    } = this;


    (async () => {
      const rawResponse = await fetch('/work_orders', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({coffee, method, cases, packets, notes, priority, ship_date})
      });
      const content = await rawResponse.json();
      if(rawResponse.ok){ //no need to make second request, simply append work order to existing array
        this.setState({workOrders: [...workOrders, content].sort( (a, b) =>  a.ship_date-b.ship_date) })
        this.changeModalState()
      } else {
        let errors = ''
        for(let er in content) {
          errors += `${er}: ${content[er]}. `
        }
        this.setState({error: `${rawResponse.statusText}. ${errors}`})
      }
    })();
  }

  //handles pagination
  setPage(page) {
    if(page < 1 || page > this.getPageCount()){
      return;
    }
    this.setState({page});
  }

  //sets up initial pagination at bottom of page
  getPageCount() {
    const {
      state: {
        workOrders
      }
    } = this;
    return workOrders.length % 25 === 0 ? workOrders.length / 25 : workOrders.length / 25 + 1;
  }

  render() {
    const {
      state: {
        workOrders,
        workOrder,
        page,
        showModal,
        error
      },
      handleInputChange,
      changeModalState,
      saveAndClose,
      setError,
      setDate,
      setPage,
      getPageCount,
      reverse
    } = this;

    const items = [];
    const pageCount = getPageCount(); //set as variable so function is not called repeatedly below
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
                      saveAndClose={saveAndClose}
                      handleInputChange={handleInputChange}
                      setError={setError}
                      error={error}
                      setDate={setDate}
                      workOrder={workOrder}
                      />
          <Table  reverse={reverse}
                  changeModalState={changeModalState} 
                  workOrders={workOrders.slice((page-1) * 25, (page-1) * 25 + 25)}/>
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
