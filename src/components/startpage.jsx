import * as React from 'react';

export default class StartPage extends React.Component {
  _beginQuiz () {
      this.props.navigate('quiz')
  }

  render () {
    return (
      <div>
        <button className="cta-button" onClick={this._beginQuiz.bind(this)}>Begin Evaluation</button>
      </div>
    );
  }
} //end class StartPage
