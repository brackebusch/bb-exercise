import { Alert } from 'react-bootstrap';
import React from 'react';

const Error = ({error}) => {
  if(!error.length){
    return ''
  }

  return <Alert bsStyle="warning">{error}</Alert>
}

export default Error;