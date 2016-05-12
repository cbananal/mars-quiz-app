import * as React from 'react';
import * as ReactDOM from 'react-dom';

require ('./reset.scss');
require ('./main.scss');


//Parent Component
class App extends React.Component {

  render() {
    return (
      <div>

      </div>
    );
  }
} //end class App



ReactDOM.render(<App />, document.getElementById('mars-react'));
