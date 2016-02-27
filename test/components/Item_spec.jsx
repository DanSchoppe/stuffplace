import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument
} from 'react-addons-test-utils';
import Item from '../../src/components/Item';

describe('Item', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
        <Item pair={["Infiniti", "G35"]} />
    );
    // const buttons = scryRenderedDOMComponentsWithTag(component, 'RaisedButton');

    // expect(buttons.length).to.equal(2);
    // expect(buttons[0].textContent).to.equal('Infiniti');
    // expect(buttons[1].textContent).to.equal('G35');
  });

});
