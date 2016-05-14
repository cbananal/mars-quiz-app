import * as React from 'react';
import * as ReactDOM from 'react-dom';

require ('./reset.scss');
require ('./main.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      page: 'home'
    }
  }

  _loadPage(page) {
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
      case 'result':
        return (<ResultPage navigate={this._loadPage.bind(this)}/>)
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
        <button onClick={this._transition.bind(this)}>Take Test</button>
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
        <button onClick={this._beginQuiz.bind(this)}>Begin Evaluation</button>
      </div>
    );
  }
} //end class StartPage

ReactDOM.render(<App />, document.getElementById('mars-react'));
