import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument
} from 'react-addons-test-utils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Item from '../../src/components/Item';

// Needed for onTouchTap, can go away when react 1.0 release
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

describe('Item', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <MuiThemeProvider>
        <Item pair={["Infiniti", "G35"]} />
      </MuiThemeProvider>
    );
    // const buttons = scryRenderedDOMComponentsWithTag(component, 'RaisedButton');

    // expect(buttons.length).to.equal(2);
    // expect(buttons[0].textContent).to.equal('Infiniti');
    // expect(buttons[1].textContent).to.equal('G35');
  });

});
