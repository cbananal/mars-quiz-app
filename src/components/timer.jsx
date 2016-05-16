import * as React from 'react';

export default class Timer extends React.Component {
  constructor(){
    super ();
    this.state = {
      seconds: 60
    }
  }

  //This built-in function runs only once the page is loaded, as opposed to
  //componentDidUpdate which loads the page and runs all the time, and updates
  //changes made.
  componentDidMount() {
    this.timer = setInterval( ()=> {
      if (this.state.seconds > 0) {
        this.setState({seconds: this.state.seconds-1});
      }
    }, 1000) //1000ms is equal to 1 sec
  }

  _transitionToFail(){
    this.props.navigate('fail')
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.seconds === 0) {
      this._transitionToFail();
      clearInterval(this.timer);
    }
  }

  //Math.floor is a built-in function that rounds off the number.
  _convertToClock() {
    let minute = Math.floor(this.state.seconds / 60);
    let seconds = Math.floor(this.state.seconds % 60); //Get whatever's left by dividing it to 60.
      if (seconds < 10) {
        seconds =  '0' + seconds; //Adds zero before the second so it displays as 0:09 instead of 0:9
      }
    let clockTime = minute + ':' +seconds; //Combines minutes and seconds
    return clockTime;
  }

  //When the class/page is gone, the following will run.
  componentWillUnmount(prevProps, prevState) {
      clearInterval(this.timer);
  }

  render() {
    return(
      <div>
        <p>{this._convertToClock()}</p>
      </div>
    );
  }
} //end class Timer
