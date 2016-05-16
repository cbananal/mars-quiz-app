import * as React from 'react';
import * as ReactDOM from 'react-dom';

//Components
import HomePage from './components/homepage';
import StartPage from './components/startpage';
import QuizPage from './components/quizpage';
import FailPage from './components/failpage';
import PassPage from './components/passpage';
//Timer is not imported here because it "lives" inside the QuizPage.

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


ReactDOM.render(<App />, document.getElementById('mars-react'));
