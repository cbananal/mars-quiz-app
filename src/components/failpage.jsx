import * as React from 'react';

export default class FailPage extends React.Component {

  //Navigates back to beginning of quiz
  _nextPage() {
    this.props.navigate('start');
  }

  //Starts timer
  componentDidMount() {
    let time = 0;

    this.timer = setInterval(()=> {
      time ++;

      //Go back to start page after five counts for another try
      if (time === 5) {
        this._nextPage();
      }
    },1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return(
      <div className="fail-page">
        <p>Fail</p>
      </div>
    );
  }
} //end class FailPage
