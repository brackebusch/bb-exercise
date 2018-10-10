import React from 'react';
import moment from 'moment';
import './Table.css';

const Table = ({workOrders, reverse, changeModalState}) => {

  const renderRows = () => {
    if(!workOrders || !workOrders.length){
      return <tr><td>Loading...</td></tr>
    }
    return workOrders.map( (workOrder, index) => (
        <tr key={workOrder.id} className={index % 2 === 0 ? '' : 'Striped'}>
          <td>{workOrder.coffee}</td>
          <td>{workOrder.method}</td>
          <td>{workOrder.cases}</td>
          <td>{workOrder.packets}</td>
          <td>
            {moment(workOrder.ship_date).format('MM/DD/YYYY')}
            {workOrder.priority ? ' ★' : ''}
          </td>
          {/* would ideally set these up to edit or view orders */}
          <td className='Order'  onClick={changeModalState}>#{workOrder.id}</td>
          <td><i className='fas fa-eye' onClick={ changeModalState}></i></td>
        </tr>
    ));
  }

  return(
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
            <th><br/>Ship Date <i className='fas fa-sort-amount-down' onClick={reverse}></i></th>
            <th><br/>Order</th>
            <th><br/>View</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}

export default Table
