import * as React from 'react';
import * as ReactDOM from 'react-dom';

require ('./reset.scss');
require ('./main.scss');

class App extends React.Component {
  constructor(props) { //Constructor and props enable the use of 'this.state'
    super(props);      //Don't ask why and how for now. Read more about it later.
    this.state={
      page: 'home'
    }
  }

  _loadPage(page) { // This takes 'page' for a value.
    this.setState({page});
  }

  _initialize() {
    switch(this.state.page) {
      case 'home':
        return (<HomePage navigate={this._loadPage.bind(this)}/>)
        break;
      case 'start':
        return (<StartPage navigate={this._loadPage.bind(this)}/>)
        break;
      case 'quiz':
        return (<QuizPage navigate={this._loadPage.bind(this)}/>)
        break;
      case 'pass':
        return (<PassPage navigate={this._loadPage.bind(this)}/>)
        break;
      case 'fail':
        return(<FailPage navigate={this._loadPage.bind(this)}/>)
        break;
    }
  }

  render() {
    return (
      <div>
        {this._initialize()}
      </div>
    );
  }
} //end class App


class HomePage extends React.Component {

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


class StartPage extends React.Component {
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


class QuizPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      questionnaire: [
          {
            ask: 'What is the highest mountain on Mars?',
            answer: 'mons olympus',
            result: false //There is no answer given yet that's why it starts at false.
          },
          {
            ask: 'What year did the Sojourner Rover, the first robot rover, go to Mars?',
            answer: '1997',
            result: false
          },
          {
            ask: 'Mars was named after the Roman god of what?',
            answer: 'war',
            result: false
          }
      ],
      itemNum: 0 //This tracks the question the user is currently on.
    }
  }

  _submitAnswer(button) {
    button.preventDefault();

    let userAnswer = this.refs.userAnswer.value.toLowerCase();
    // console.log(userAnswer);

    // console.log(this.refs.userAnswer.value);
    //newQuestionnaire is a new array copied from the state questionnaire so we can modify it.
    //listblock refers to the whole list (ask, answer, result) in the array questionnaire.
    if (userAnswer === this.state.questionnaire[this.state.itemNum].answer) {
        const newQuestionnaire = this.state.questionnaire.map((listblock) => {
          if (this.state.questionnaire[this.state.itemNum] === listblock) {
            listblock.result = true;
          }
          return listblock;
        });
    }
    // console.log(this.state.questionnaire);

    this.setState({itemNum: this.state.itemNum +1});
    // console.log(this.state.itemNum);

    //Clear the previous answer
    this.refs.userAnswer.value = "";
  }

  _tallyScore() {
    let rightAnswers = 0;

    const score = this.state.questionnaire.map((listblock) => {
      if (listblock.result === true) {
        rightAnswers++;
      }
    });

    //You cannot do 'listblock.results > 2' below because listblock is inside
    //the map in const score. Variables inside a function cannot go
    //outside of it.
    if (rightAnswers > 2) {
      this.props.navigate('pass');
    } else {
      this.props.navigate('fail');
    }
  }

  //The following is a built-in function on React. You can put it anywhere
  //as it runs all the time. If any changes happen in a class, it will be called.
  //In this case, it will go back to the first page if the user fails.
  componentDidUpdate(prevProps, prevState) {
    if(this.state.itemNum === 3) {
      this._tallyScore();
      this.setState({itemNum:0}) //Set the state back to zero (like the default state).
    }
  }

  render() {
    return (
      <div>
      {this.state.itemNum < 3 ?
        <div className="question-area">
          <p>{this.state.questionnaire[this.state.itemNum].ask}</p>
          <form>
            <input type='text' ref="userAnswer"/>
            <button className="submit-answer" onClick={this._submitAnswer.bind(this)}>Submit</button>
          </form>
        </div> : ''}
        <button onClick={this._tallyScore.bind(this)}>Calculate</button>
      </div>
    );
  }
} //end class QuizPage







ReactDOM.render(<App />, document.getElementById('mars-react'));
