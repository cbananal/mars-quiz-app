import * as React from 'react';

export default class HomePage extends React.Component {

  _transition() {
    this.props.navigate('start')
  }

  render() {
    return (
      <div>
        <button className="cta-button" onClick={this._transition.bind(this)}>Take Test</button>
      </div>
    );
  }
} //end class HomePage
