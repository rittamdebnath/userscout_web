import React, { Component } from 'react';
// import Post from './containers/Post';
import Property from './containers/Property';
import NewProperty from './containers/Property/add';

class App extends Component {
  render() {
    return (
      <div className="container px-0">
        {/* <Post /> */}
        <NewProperty />
        <Property />
      </div>
    );
  }
}

export default App;
