import React, { Component } from "react";

const handleClick = () => {
  console.log('XABLAU');
};

class App extends Component {
  render () {
    return (
      <button onClick={ handleClick }>Click</button>
    );
  }
}

export default App;
