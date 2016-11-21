import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Item from './components/Item';

// Needed for onTouchTap, can go away when react 1.0 release
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const pair = ['Infiniti', 'G35'];

ReactDOM.render(
  <MuiThemeProvider>
    <Item pair = {pair} />
  </MuiThemeProvider>,
  document.getElementById('app')
);
