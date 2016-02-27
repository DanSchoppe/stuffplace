import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Item';

const pair = ['Infiniti', 'G35'];

ReactDOM.render(
  <Voting pair = {pair} />,
  document.getElementById('app')
);
