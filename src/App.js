import React, { Component } from 'react';
import Post from './containers/Post';
import Property from './containers/Property';

class App extends Component {
  render() {
    return (
      <div className="container px-0">
        {/* <Post /> */}
        <Property />
      </div>
    );
  }
}

export default App;
