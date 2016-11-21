import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return <div className="item">
      {this.getPair().map(entry =>
        <RaisedButton key={entry} label={entry}/>
      )}
    </div>;
  }
});
