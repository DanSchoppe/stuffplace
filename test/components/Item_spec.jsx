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
  });

});
