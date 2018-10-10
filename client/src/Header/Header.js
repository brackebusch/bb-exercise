import React from 'react';
import logo from './logo.svg';
import moment from 'moment'; 
import './Header.css';

const Header = ({changeModalState}) => {
  return(
    <div>
      <img src={logo} className='App-logo' alt='logo' />
      <div className='Header'>
        <div className='Date-Title'>
          <div className='Date'>
            <span className='Month'>{moment().format('MMM')}</span>
            <span className='Day'>{moment().format('DD')}</span>
          </div>
          <span className='Title'>Perfectly Ground Work Orders</span>
        </div>
        <button onClick={changeModalState}>CREATE ORDER</button>
      </div>
    </div>
  );
}

export default Header