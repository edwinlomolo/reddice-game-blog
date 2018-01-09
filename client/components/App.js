import React, { Component } from 'react';

import NavigationBar from './Navigationbar';
import Greetings from './Greetings';

class App extends Component {
  render () {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
