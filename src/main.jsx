import * as React from 'react';
import * as ReactDOM from 'react-dom';

require ('./reset.scss');
require ('./main.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      page: "home"
    }
  }

  _loadPage() {
    this.setState( {page});
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
      case 'results':
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



ReactDOM.render(<App />, document.getElementById('mars-react'));
